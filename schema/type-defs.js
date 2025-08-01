const {gql} = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPub: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: UsersResult
        user(id: ID!): User!
        movies: [Movie]
        movie(name: String!): Movie!
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = Apache
    }

    input updateUsernameInput {
        id: ID!
        newUsername: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUsername(input: updateUsernameInput!): User
        deleteUser(id: ID!): User
    }

    enum Nationality {
        tohonoodham
        indonesian
        apache
        chilean
        costarican
        brazil
    }

    type UsersSuccessfulResult {
        users: [User!]!
    }
    type UsersErrorResult {
        message: String!
    }
    union UsersResult = UsersSuccessfulResult | UsersErrorResult
`;

module.exports = {typeDefs}