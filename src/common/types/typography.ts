import { SerializedStyles } from '@emotion/react';

import { Breakpoint } from './breakpoint';

export type Typography =
  | 'bodyL'
  | 'bodyXM'
  | 'bodyM'
  | 'bodyMb'
  | 'bodySb'
  | 'bodyS'
  | 'bodySm'
  | 'bodyXSb'
  | 'bodyXS'
  | 'bodyXXS'
  | 'bodyXXSb'
  | 'bodyXXXS'
  | 'button1'
  | 'button2'
  | 'bodySFPro'
  | 'overline'
  | 'header1'
  | 'header2'
  | 'header3'
  | 'header4'
  | 'subtitle1'
  | 'subtitle2'
  // | 'header4'
  // | 'header4'
  | 'linkText'
  | 'linkTextSmall';

export type Font = 'poppins';

export type ThemeFont = Record<Font, string>;
export type ThemeTypography = Record<Typography, SerializedStyles>;
export type BreakpointType = Partial<Record<Breakpoint, Typography>>;
export type TypographyProps = BreakpointType & { primary?: Typography };
export type CombineTypographySignature = (
  prop: TypographyProps,
) => SerializedStyles[];
