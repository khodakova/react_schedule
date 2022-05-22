import {gql, makeVar} from '@apollo/client';

export const dialogUpdate = makeVar(false);

export const GET_DIALOG_UPDATE = gql`
    query getDialogUpdate {
        dialogUpdate @client
    }
`;
