// here we will create the function that will be direcltly used in the controller of the user

// here we will create the user and login them by the jwt token

// By default, all methods are public if you don’t specify anything.

import { prisma } from "../lib/db";
import { createHmac, randomBytes } from "node:crypto";
import JWT from "jsonwebtoken";


// this is the typescript schema for the user create and ? means optional field
// basically this is the schema from the client side that we will use to create the user in the database
export interface CreateUserPayload{
    firstName: string;
    lastName?: string;
    email: string;
    password: string;
    profileImageURL?: string;
}

export interface GetUserTokenPayload {
    // LOGIN PAYLOAD
    email: string;
    password: string;
}


class UserService{
    
    private static generateHash(salt: string, password: string) {
        const hashedPassword = createHmac("sha256", salt).update(password).digest("hex");
        return hashedPassword;
    }


    public static createUser(payload: CreateUserPayload) {
        // destructuring the payload to get the user details
        const { firstName, lastName, email, password, profileImageURL } = payload;

        // salting the password and hashing it
        const salt = randomBytes(32).toString("hex");
        const hashedPassword = UserService.generateHash(salt, password);

        return prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                salt,
                password: hashedPassword,
                profileImageURL
            }
        });
        // id will be generated automatically by the database
    }


    private static getUserByEmail(email: string) {
        if (!email) {
            throw new Error("Email is required");
        }
        return prisma.user.findUnique({
            where: {
                email
            }
        });
    }


    // this is the login service that will be used to get the user token 
    public static async getUserToken(payload:GetUserTokenPayload){
        const { email, password } = payload;
        if(!email || !password) {
            throw new Error("Email and password are required");
        }

        // get the user by email
        const user = await UserService.getUserByEmail(email);
        if (!user) {
            throw new Error("User not found");
        }

        const userSalt = user.salt; //from the database
        const userHashedPassword = UserService.generateHash(userSalt, password);


        // the password in the database is hashed with the salt, so we need to hash the password provided by the user with the same salt and compare it with the hashed password in the database
        if (userHashedPassword !== user.password) {
            throw new Error("Invalid password");
        }

        // generating the JWT token
        const token = JWT.sign(
            {
                id: user.id,
                email: user.email,
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "1d",
            }
        );

        return token;
    }


    public static async decodeToken(token: string) {
        if (!token) {
            throw new Error("Token is required");
        }

        try {
            const decoded = JWT.verify(token, process.env.JWT_SECRET as string);
            return decoded;
        } catch (error) {
            throw new Error("Invalid token");
        }
    }


    public static async getUserById(id: string) {
        if (!id) {
            throw new Error("User ID is required");
        }

        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }



}

export default UserService;


// we cannot dehash the password because hashing is a one way function and we cannot get the original password back from the hashed password so we need to hash the user provided password with the same salt and compare it with the hashed password in the database