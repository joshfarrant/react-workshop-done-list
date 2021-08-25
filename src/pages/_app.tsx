import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { ReactElement } from 'react';

export const App = ({ Component, pageProps }: AppProps): ReactElement => {
    return <Component {...pageProps} />;
};
