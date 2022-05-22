import {QueryResult} from '@apollo/client';
import React from 'react';
import {useNavigate} from 'react-router';

import {saveToken, saveUser} from '@src/helpers/localStorage';
import {isAuth, token, user} from '@src/http/reactivities';
// import {
//     GetTokenQuery,
//     GetTokenQueryVariables,
//     useGetTokenLazyQuery,
// } from '@src/modules/login/__generated__/login.generated';
import {default as LoginFormComponent} from '@src/modules/login/components/LoginForm2';
import {RouteNames} from '@src/router';

export default function LoginForm() {
    const navigate = useNavigate();
    // const [login, {loading, error}] = useGetTokenLazyQuery();

    // const handleLogin = (values: GetTokenQueryVariables) => {
    //     login({
    //         variables: {
    //             password: values.password,
    //         },
    //     })
    //         .then((res: QueryResult<GetTokenQuery, GetTokenQueryVariables>) => {
    //             if (res.data && res.data.getToken) {
    //                 saveToken(res.data.getToken?.accessToken);
    //                 token(res.data.getToken?.accessToken);
    //                 saveUser(res.data.getToken?.userName);
    //                 user(res.data.getToken?.userName);
    //             }
    //             isAuth(true);
    //         })
    //         .then(() => navigate('/'))
    //         .catch((err) => console.log(err));
    // };
    
    const handleLogin = () => {
        saveToken('token');
        token('token');
        saveUser('user');
        user('user');
        isAuth(true);
        navigate(RouteNames.DASHBOARD)
    }

    return (
        <LoginFormComponent
            loading={false}
            login={handleLogin}
        />
    );
}
