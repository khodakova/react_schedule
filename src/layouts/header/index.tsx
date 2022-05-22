import {Logout} from '@mui/icons-material';
import {AppBar, Box, IconButton, Toolbar, Tooltip} from '@mui/material';
import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';

import {deleteToken, deleteUser} from '@src/helpers/localStorage';
import {isAuth, user} from '@src/http/reactivities';
import {HEADERS, IMenuItem, RouteNames} from '@src/router';

import logo from '@images/logo.png';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClickLogout = () => {
        deleteToken();
        deleteUser();
        isAuth(false);
        navigate(RouteNames.LOGIN);
    };

    const handleClickLogo = () => {
        navigate(RouteNames.DASHBOARD);
    };

    return (
        <>
            <Box
                sx={{boxShadow: '0 0 10px rgba(0,0,0,.05)', position: 'static'}}
            >
                <AppBar position="static">
                    <Toolbar sx={{justifyContent: 'space-between'}}>
                        <img
                            onClick={handleClickLogo}
                            src={logo}
                            alt="logo"
                            className="app-header__logo"
                            width={50}
                        />
                        <div className="menu">
                            <ul>
                                {HEADERS.map((item: IMenuItem) => (
                                    <li
                                        key={item.to}
                                        onClick={() => navigate(item.to)}
                                        className={
                                            location.pathname === item.to
                                                ? 'active'
                                                : ''
                                        }
                                    >
                                        <Link to={item.to}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Box
                            sx={{
                                flexGrow: 0,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            className="menu-center__login"
                        >
                            <div className="menu-center__username">
                                {user()}
                            </div>
                            <Tooltip title="Выйти">
                                <IconButton
                                    size="medium"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls="account of current user"
                                    aria-haspopup="true"
                                    color="inherit"
                                    onClick={handleClickLogout}
                                >
                                    <Logout fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Header;
