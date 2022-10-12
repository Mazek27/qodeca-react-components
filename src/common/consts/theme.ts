/* eslint-disable sort-keys */

import { createTheme } from '@mui/material';

import { Theme } from '../types/theme';
import { font, typography } from './typography';
import {combineTypography} from "../utils/typography";

export const LARGE_CONTAINER_WIDTH = 1216;
export const MEDIUM_CONTAINER_WIDTH = 1072;
export const SMALL_CONTAINER_WIDTH = 1012;

export const THEME: Theme = {
  color: {
    primary_50: '#e6f0ff',
    primary_100: '#b2d2ff',
    primary_200: '#8cbcff',
    primary_300: '#589dff',
    primary_400: '#378aff',
    primary_500: '#056dff',
    primary_600: '#0563e8',
    primary_700: '#044db5',
    primary_800: '#033c8c',
    primary_900: '#022e6b',

    accent_50: '#fff0e6',
    accent_100: '#ffd0b0',
    accent_200: '#ffb98a',
    accent_300: '#ff9954',
    accent_400: '#ff8533',
    accent_500: '#ff6700',
    accent_600: '#e85e00',
    accent_700: '#b54900',
    accent_800: '#8c3900',
    accent_900: '#6b2b00',

    success_50: '#e9f7e8',
    success_100: '#bbe5b7',
    success_200: '#9ad994',
    success_300: '#6cc764',
    success_400: '#4fbd45',
    success_500: '#23ac17',
    success_600: '#209d15',
    success_700: '#197a10',
    success_800: '#135f0d',
    success_900: '#0f480a',

    error_50: '#fef2f2',
    error_100: '#fbd7d8',
    error_200: '#f9c3c5',
    error_300: '#f6a8aa',
    error_400: '#f59799',
    error_500: '#E15141',
    error_600: '#dc7274',
    error_700: '#ac595b',
    error_800: '#854546',
    error_900: '#663536',

    warning_50: '#fefaeb',
    warning_100: '#fcefc2',
    warning_200: '#fae7a4',
    warning_300: '#f8dc7a',
    warning_400: '#f6d561',
    warning_500: '#f4cb39',
    warning_600: '#deb934',
    warning_700: '#ad9028',
    warning_800: '#86701f',
    warning_900: '#665518',

    neutral_1_1: '#ffffff',
    neutral_1_2: '#fdfdfd',
    neutral_1_3: '#f7f7f7',
    neutral_1_4: '#f2f3f3',
    neutral_1_5: '#e0e0e1',
    neutral_1_6: '#cbcccd',
    neutral_1_7: '#a1a3a5',
    neutral_1_8: '#777a7e',
    neutral_1_9: '#666a6e',
    neutral_1_10: '#262626',
    neutral_1_11: '#464b50',
    neutral_1_12: '#3e4348',
    neutral_1_13: '#2d3338',

    neutral_2_50: '#f9fafc',
    neutral_2_100: '#eef0f6',
    neutral_2_200: '#e5e8f1',
    neutral_2_300: '#d9deeb',
    neutral_2_400: '#B5BBCD',
    neutral_2_500: '#8D92A8',
    neutral_2_600: '#b5bbcd',
    neutral_2_700: '#54565F',
    neutral_2_800: '#323338',
    neutral_2_900: '#1B1C1F',

    accent: '#FF6700',

    active: '#23AC17',

    background: '#E5E5E5',
    navigation_background: '#FFFFFF',
    shadow_small: 'rgba(249, 250, 252, 0.8)',
    black: '#000000',
    shield_black: '#1D2333',

    primary: '#056DFF',

    warn_100: '#FFD5B6',
    warn_300: '#FBA255',

    white: '#ffffff',
    outer_space: '#484E53',

    banner: '#A9CDFF',
  },
  combineTypography,
  font: {
    ...font,
    ...typography,
  },
  layout: {
    largeContainerWidth: `${LARGE_CONTAINER_WIDTH}px`,
    mediumContainerWidth: `${MEDIUM_CONTAINER_WIDTH}px`,
    smallContainerWidth: `${SMALL_CONTAINER_WIDTH}px`,
  },
  name: 'Default TravelShield theme',
  typography,
};

export const muiTheme = createTheme({
  // add some custom theme ...
  // for more info see: https://mui.com/system/styled/#using-the-theme
  // palette: {
  //   background: {
  //     default: THEME.color.white,
  //   },
  // },
});
