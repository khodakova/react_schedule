import {setContext} from '@apollo/client/link/context';

import {getToken} from '@src/helpers/localStorage';

export const authLink = setContext((_, {headers}) => {
    // получаем токен, если он есть
    const token = getToken();
    // возвращаем все необходимые заголовки для запроса
    return {
        headers: {
            ...headers,
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*',
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});
