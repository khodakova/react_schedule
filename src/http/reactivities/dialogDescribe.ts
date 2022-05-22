import {gql, makeVar} from '@apollo/client';

export const dialogDescribe = makeVar(false);

export const GET_DIALOG_DESCRIBE = gql`
    query getDialogDescribe {
        dialogDescribe @client
    }
`;
