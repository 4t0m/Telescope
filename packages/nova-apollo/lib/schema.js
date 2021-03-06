import { GraphQLSchema } from 'meteor/nova:lib';

const generateTypeDefs = () => [`
  ${GraphQLSchema.getCollectionsSchemas()}
  ${GraphQLSchema.getAdditionalSchemas()}

  type Query {
    ${GraphQLSchema.queries.join('\n')}
  }

  type Mutation {
    ${GraphQLSchema.mutations.join('\n')}
  }
`];

export default generateTypeDefs;