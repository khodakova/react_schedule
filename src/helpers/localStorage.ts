import {isBrowser} from '@src/utils';

const TOKEN_NAME = 'token';
const LAST_ROUTE_NAME = 'lastRoute';
const USER = 'user';

export const saveItem = (name: string, item?: any) =>
    isBrowser && item ? localStorage.setItem(name, item) : null;

export const getItem = (name: string): string | null =>
    isBrowser ? localStorage.getItem(name) : null;

export const deleteItem = (name: string) =>
    isBrowser ? localStorage.removeItem(name) : null;

export const saveToken = (token?: string | null) => saveItem(TOKEN_NAME, token);
export const getToken = (): string | null => getItem(TOKEN_NAME);
export const deleteToken = () => deleteItem(TOKEN_NAME);

export const setLastRoute = (lastRoute?: string) =>
    saveItem(LAST_ROUTE_NAME, lastRoute);
export const getLastRoute = (): string | null => getItem(LAST_ROUTE_NAME);
export const deleteLastRoute = () => deleteItem(LAST_ROUTE_NAME);

export const saveUser = (user?: string | null) => saveItem(USER, user);
export const getUser = (): string | null => getItem(USER);
export const deleteUser = () => deleteItem(USER);
