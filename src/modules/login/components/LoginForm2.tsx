import {Visibility, VisibilityOff} from '@mui/icons-material';
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import {useFormik} from 'formik';
import React, {useState} from 'react';

import {useCapsLock} from '@src/hooks/useCapsLock';
// import {GetTokenQueryVariables} from '@src/modules/login/__generated__/login.generated';
import LoginError from '@src/modules/login/components/LoginError';
import {validationSchema} from '@src/modules/login/validationSchema';

import CustomButton from '@components/UI/CustomButton';

interface LoginFormProps {
    // login(values: GetTokenQueryVariables): void;
    login(): void;

    loading: boolean;
    error?: any;
}

const LoginForm: React.FC<LoginFormProps> = ({login, loading, error}) => {
    const {caps, onKeyDown} = useCapsLock();
    const [passVisible, setPassVisible] = useState(false);

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            login();
        }
        // onSubmit: (values: GetTokenQueryVariables) => {
        //     login(values);
        // },
    });

    const handleClickShowPassword = () => {
        setPassVisible(!passVisible);
    };

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={formik.handleSubmit} className="login__form">
            <div className="login__form__title">Вход в систему</div>
            <div className={'login__form__error'}>
                {error && <LoginError error={error.message} />}
            </div>
            {caps && !error && (
                <div className={'login__form__caps'}>Включен CAPS LOCK</div>
            )}
            <FormControl
                sx={{m: 1, width: '300px'}}
                variant="outlined"
                error={formik.touched.password && !!formik.errors.password}
                className="login__input"
            >
                <InputLabel htmlFor="outlined-adornment-password">
                    Введите пароль
                </InputLabel>
                <OutlinedInput
                    autoFocus
                    id="outlined-adornment-password"
                    type={passVisible ? 'text' : 'password'}
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onKeyDown={onKeyDown}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {passVisible ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Введите пароль"
                />
                <FormHelperText id="component-error-text" sx={{height: '30px'}}>
                    {formik.touched.password && !!formik.errors.password
                        ? formik.errors.password
                        : null}
                </FormHelperText>
                <CustomButton
                    className="login__form__btn"
                    type="submit"
                    loading={loading}
                >
                    Войти
                </CustomButton>
            </FormControl>
        </form>
    );
};

export default LoginForm;
