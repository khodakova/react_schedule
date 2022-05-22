import {gql, makeVar} from '@apollo/client';

export const dialogAdd = makeVar(false);

export const GET_DIALOG_ADD = gql`
    query getDialogAdd {
        dialogAdd @client
    }
`;
