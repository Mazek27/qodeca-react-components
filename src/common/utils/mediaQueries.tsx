/* eslint-disable sort-keys */
import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

import Responsive, { MediaQueryTypes } from 'react-responsive';

import { Breakpoint } from '../types/breakpoint';

type MediaQueries = Record<
  Breakpoint,
  (cssHelper: SerializedStyles) => SerializedStyles
>;

export const breakpoints: Record<Breakpoint, number> = {
  xSmall: 320,
  smallIp: 500,
  small: 576,
  medium: 768,
  mobileMax: 991,
  large: 992,
  xLarge: 1200,
  xxLarge: 1280,
  xxxLarge: 1400,
};

export const mq = Object.keys(breakpoints).reduce<MediaQueries>(
  (acc, label) => {
    const prefix = 'min-width:';
    const suffix = 'px';

    acc[label as Breakpoint] = (cls: any) =>
      css`
        @media (${prefix + breakpoints[label as Breakpoint] + suffix}) {
          ${cls};
        }
      `;

    return acc;
  },
  {} as MediaQueries,
);

export const mqMax = Object.keys(breakpoints).reduce<MediaQueries>(
  (acc, label) => {
    const prefix = 'max-width:';
    const suffix = 'px';

    acc[label as Breakpoint] = (cls: any) =>
      css`
        @media (${prefix + breakpoints[label as Breakpoint] + suffix}) {
          ${cls};
        }
      `;

    return acc;
  },
  {} as MediaQueries,
);

export const Mobile = (props: MediaQueryTypes) => (
  <Responsive {...props} maxWidth={breakpoints.small} />
);

export const MobileMax = (props: MediaQueryTypes) => (
  <Responsive {...props} maxWidth={breakpoints.mobileMax} />
);

export const Tablet = (props: MediaQueryTypes) => (
  <Responsive {...props} minWidth={breakpoints.medium} />
);

export const Desktop = (props: MediaQueryTypes) => (
  <Responsive {...props} minWidth={breakpoints.large} />
);

export const DesktopLarge = (props: MediaQueryTypes) => (
  <Responsive {...props} minWidth={breakpoints.xLarge} />
);
