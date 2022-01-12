import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';

import '../styles/base.css';
import { theme } from '../styles';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    const queryClient = new QueryClient();
    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default App;
