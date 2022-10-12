import { ThemeValue } from './themeValue';
import {
  CombineTypographySignature,
  ThemeFont,
  ThemeTypography,
} from './typography';

export type Theme = {
  color: ThemeValue;
  combineTypography: CombineTypographySignature;
  font: ThemeTypography & ThemeFont;
  layout: ThemeValue;
  name: string;
  typography: ThemeTypography;
};
