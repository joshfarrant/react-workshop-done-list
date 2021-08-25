import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';

import '../styles/base.css';
import { theme } from '../styles';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
