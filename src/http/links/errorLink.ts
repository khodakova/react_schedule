import {ErrorResponse, onError} from '@apollo/client/link/error';

import {deleteToken, deleteUser, getToken} from '@src/helpers/localStorage';
import {token, user} from '@src/http/reactivities';
import {RouteNames} from '@src/router';
import {history} from '@src/index';

/**
 * Обработчик ошибок для клиента
 */
export const errorLink = onError(
    ({graphQLErrors, networkError, operation, forward}: ErrorResponse) => {
        // console.log(graphQLErrors);
        if (graphQLErrors) {
            for (const err of graphQLErrors) {
                switch (err.extensions.code) {
                    // Apollo Server sets code to UNAUTHENTICATED
                    // when an AuthenticationError is thrown in a resolver
                    case 'UNAUTHENTICATED':
                        const oldHeaders = operation.getContext().headers;

                        deleteToken();

                        operation.setContext({
                            headers: {
                                ...oldHeaders,
                                authorization: getToken(),
                            },
                        });
                        // Попытка снова попробовать отправить запрос
                        return forward(operation);
                }
            }
        }
        if (networkError) {
            console.log(`[Network error]: ${networkError}`);
            // @ts-ignore
            if (networkError.statusCode === 401) {
                token();
                user();
                deleteToken();
                deleteUser();
                history.push(RouteNames.LOGIN);
            }
            networkError.message = 'Проблема с соединением!';
        }
    },
);
