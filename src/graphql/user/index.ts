import { typeDefs } from './typedef';
import { queriesType } from './queries';
import { mutationsType } from './mutation';
import { resolvers } from './resolvers';

export const User = { typeDefs, queriesType, mutationsType, resolvers };

// so we have exported the whole User and using it in the index.ts file