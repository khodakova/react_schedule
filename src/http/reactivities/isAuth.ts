import {gql, makeVar} from '@apollo/client';

import {getToken} from '@src/helpers/localStorage';

export const isAuth = makeVar(!!getToken());

export const GET_IS_AUTH = gql`
    query getIsAuth {
        isAuth @client
    }
`;
