import { CombineTypographySignature } from '../types/typography';
import { typography } from '../consts/typography';
import { mq } from './mediaQueries';
import { Breakpoint } from '../types/breakpoint';

export const combineTypography: CombineTypographySignature = (props) => {
  const { primary, ...breakpoints } = props;

  const defaultStyles =
    primary && typography[primary] ? [typography[primary]] : [];

  return Object.entries(breakpoints).reduce(
    (combinedStyles, [breakpointName, typographyVariant]) => {
      const mediaQuery = mq[breakpointName as Breakpoint];
      const typographySettings = typography[typographyVariant];

      if (mediaQuery && typographySettings) {
        combinedStyles.push(mediaQuery(typographySettings));
      }

      return combinedStyles;
    },
    defaultStyles,
  );
};
