import {ApolloClient} from '@apollo/client';

import {cache} from '@src/http/cache';
import link from '@src/http/links';
import {typeDefs} from '@src/http/typeDefs';

export const useApolloClient = () => {
    return new ApolloClient({
        link: link,
        cache,
        typeDefs,
    });
};
