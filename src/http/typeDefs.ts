import {gql} from 'graphql-tag';

export const typeDefs = gql`
    type TestSystem {
        id: ID!
        createBy: Int
        createByName: String
        createDate: String
        updateBy: Int
        updateByName: String
        updateDate: String
        actuality: Int!
        regNum: String!
        regDate: String!
        suitCreateDate: String
        suitDateEnd: String
        lot: String
        medProductName: String!
        vendor: String!
        forConclusion: String
    }

    type Token {
        accessToken: String
        tokenType: String
        scope: String
        userName: String
        permissions: [String]
        userId: Int
    }

    type Srvdep {
        id: ID!
        code: String
        text: String!
    }

    type AnalTest {
        id: ID
        analTestName: String
        analyzerName: String
        abstractTestName: String
        srvdepId: Int
    }

    type Query {
        getAllTestSystemsByAnalTestId(analTestId: ID): [TestSystem]
        getTestSystemByAnalTestId(analTestId: ID): TestSystem
        getToken(grantType: String, userName: String, password: String): Token
        getSrvdeps: [Srvdep]
        getAnalTestBySrvdepId(srvdepId: ID): [AnalTest]
    }

    type Mutation {
        saveTestSystem(
            analTestId: ID!
            regNum: String!
            regDate: String!
            suitCreateDate: String
            suitDateEnd: String
            lot: String
            medProductName: String!
            vendor: String!
            forConclusion: String
        ): TestSystem

        updateTestSystem(
            id: ID!
            actuality: Int!
            regNum: String!
            regDate: String!
            suitCreateDate: String
            suitDateEnd: String
            lot: String
            medProductName: String!
            vendor: String!
            forConclusion: String
        ): TestSystem
    }
`;
