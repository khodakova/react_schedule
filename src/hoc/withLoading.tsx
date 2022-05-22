import React from 'react';

import Spinner from '@components/spinner/Spinner';

interface WithLoadingProps {
    loading: any;
    error: any;
}

const withLoading =
    <P extends object>(
        Component: React.ComponentType<P>,
    ): React.FC<P & WithLoadingProps> =>
    ({loading, error, ...props}: WithLoadingProps) => {
        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <div>{error}</div>;
        }

        return <Component {...(props as P)} />;
    };

export default withLoading;
