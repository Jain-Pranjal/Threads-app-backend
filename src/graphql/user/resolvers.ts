const queries={}

const mutations={
    createUser: async (_: any, args: any, context: any) => {
        const { firstName, lastName, email, password, profileImageURL } = args;
      
        const userId = "12345"; 
        return userId;
    }

}

export const resolvers={queries,mutations}

// in the resolvers we have the actuall functions that will be used to resolve the queries and mutations so we have both queries and mutations 

// yaha par aakpa ctuial logic of th efunciton naat ahaai 

