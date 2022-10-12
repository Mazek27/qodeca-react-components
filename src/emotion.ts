
import '@emotion/react';

import {ThemeValue} from './common/types/themeValue';
import {CombineTypographySignature, ThemeFont, ThemeTypography,} from './common/types/typography';

declare module '@emotion/react' {
    // eslint-disable-next-line
    export interface Theme {
        color: ThemeValue;
        combineTypography: CombineTypographySignature;
        font: ThemeTypography & ThemeFont;
        layout: ThemeValue;
        name: string;
        typography: ThemeTypography;
    }
}
