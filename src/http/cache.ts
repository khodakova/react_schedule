import {InMemoryCache} from '@apollo/client';

import {
    dialogAdd,
    dialogDescribe,
    dialogUpdate,
    isAuth,
    token,
    user,
} from '@src/http/reactivities';

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isAuth: {
                    read() {
                        return isAuth();
                    },
                },
                dialogDescribe: {
                    read() {
                        return dialogDescribe();
                    },
                },
                dialogUpdate: {
                    read() {
                        return dialogUpdate();
                    },
                },
                dialogAdd: {
                    read() {
                        return dialogAdd();
                    },
                },
                token: {
                    read() {
                        return token();
                    },
                },
                user: {
                    read() {
                        return user();
                    },
                },
            },
        },
        ExtendedTestSystem: {
            keyFields: ['id', 'methodCode'],
        },
    },
});
