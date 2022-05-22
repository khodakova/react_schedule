import {gql, makeVar} from '@apollo/client';

import {getUser} from '@src/helpers/localStorage';

export const user = makeVar(getUser());

export const GET_USER = gql`
    query getUser {
        user @client
    }
`;
