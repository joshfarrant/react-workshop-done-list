import 'styled-components';

import { TTheme } from './theme';

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/no-empty-interface
    export interface DefaultTheme extends TTheme {}
}
