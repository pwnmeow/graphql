const { gql } = require('apollo-server')

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favMovies: [Movie]

    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int! = 18
        nationality: Nationality! = BRAZIL
     
    }

    input UpdateUsernameInput {
        username: String!,
        newusername: String!     
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
        UpdateUsername(input: UpdateUsernameInput!): User
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }

    enum Nationality {
        INDIA
        GERMANY
        BRAZIL
        CHILE
        CANADA
    }


    type Query {
        users: [User!]!
        user(id:ID!): User!
        movies: [Movie!]!
        movie(name:String!): Movie!
    } 
`;


module.exports = { typeDefs }