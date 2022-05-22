/**
 * Подхватывание переменных окружения из файлов .env
 */
const Dotenv = require('dotenv-webpack');

import {isStaging, mode} from '../utils/env';

// const path = `./.env.${!isStaging ? mode : 'staging'}`;
const path = `./.env.${mode}`;

export const dotenvPlugin = new Dotenv({path});
