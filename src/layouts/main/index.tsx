import React, {Suspense} from 'react';

import AppRouter from '@src/layouts/AppRouter';

import Spinner from '@components/spinner/Spinner';

const Main: React.FC = () => {
    return (
        <div id="main">
            <div className="home">
                <div className="container">
                    <Suspense
                        fallback={<Spinner title={'Загрузка страницы'} />}
                    >
                        <AppRouter />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Main;
