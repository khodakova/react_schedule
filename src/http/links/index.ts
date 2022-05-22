import {from} from '@apollo/client';

import {authLink} from './authLink';
import {errorLink} from './errorLink';
import {httpLink} from './httpLink';

const link = from([
    errorLink,
    authLink,
    httpLink,
]);

export default link;
