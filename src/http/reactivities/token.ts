import {gql, makeVar} from '@apollo/client';

import {getToken} from '@src/helpers/localStorage';

export const token = makeVar(getToken());

export const GET_TOKEN = gql`
    query getToken {
        token @client
    }
`;
