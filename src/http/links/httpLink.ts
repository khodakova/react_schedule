import {createHttpLink} from '@apollo/client';

export const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API_URL,
});
