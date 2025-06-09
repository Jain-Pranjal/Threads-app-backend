import UserService, { CreateUserPayload } from "../../services/user";
const queries={

    getUserToken: async(_:any,payload:{email:string,password:string})=>{
        const {email,password}=payload
        if(!email || !password) {
            throw new Error("Email and password are required");
        }

        return UserService.getUserToken(payload);
    }


}


// here we will directly use the function that will create the user in the database
const mutations={
    createUser: async(_:any,payload:CreateUserPayload)=>{
        const res=await UserService.createUser(payload);
        return res.id; // returning the id of the created user
    }
    }


export const resolvers={queries,mutations}

// in the resolvers we have the actual functions that will be used to resolve the queries and mutations so we have both queries and mutations 

