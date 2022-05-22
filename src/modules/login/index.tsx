import React from 'react';

import CustomImage from '@src/components/UI/CustomImage';
import LoginForm from '@src/modules/login/containers/LoginForm';

import logo from '@images/logo.png';

const Login: React.FC = () => {
    return (
        <div className="login__page">
            <div className="blur"></div>
            <div className="login__block">
                <CustomImage
                    src={logo}
                    alt="logo"
                    className={'login__logo'}
                    width={251}
                    height={85}
                />
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
