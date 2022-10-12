import { css } from '@emotion/react';

import { mq } from '../utils/mediaQueries';
import { ThemeFont, ThemeTypography } from '../types/typography';

// INFO https://www.w3.org/TR/css-fonts-4

export const poppins = 'Poppins, sans-serif';
const sfProDisplay = 'SF Pro Display, sans-serif';

export const header1 = css`
  font: normal 500 32px/40px ${poppins};

  ${mq.large(css`
    font-size: 56px;
    line-height: 64px;
  `)};
`;

export const header2 = css`
  font: normal 300 32px/42px ${poppins};
  letter-spacing: 0.02em;

  ${mq.large(css`
    font-size: 56px;
    line-height: 64px;
  `)};
`;

export const header3 = css`
  font: normal 500 40px/48px ${poppins};
  letter-spacing: 0.02em;

  ${mq.large(css`
    font-size: 40px;
    line-height: 48px;
  `)};
`;

export const header4 = css`
  font: normal 500 32px/32px ${poppins};
  letter-spacing: 0.015em;
`;

export const subtitle1 = css`
  font: normal 500 32px/40px ${poppins};
  letter-spacing: 0.2px;
`;

export const subtitle2 = css`
  font: normal 500 24px/32px ${poppins};
  letter-spacing: 1px;
`;

export const bodyL = css`
  font: normal 600 40px/48px ${poppins};
`;

export const bodyMb = css`
  font: normal 500 24px/32px ${poppins};
  letter-spacing: 0.5px;
`;

export const bodyM = css`
  font: normal 300 24px/32px ${poppins};
  letter-spacing: 0.5px;
`;
export const bodyXM = css`
  font: normal 500 20px/24px ${poppins};
  letter-spacing: 0.5px;
`;

export const bodySb = css`
  font: normal 500 16px/24px ${poppins};
  letter-spacing: 0.5px;
`;

export const bodyS = css`
  font: normal 300 16px/24px ${poppins};
  letter-spacing: 0.5px;
`;

export const bodySm = css`
  font: normal 500 16px/24px ${poppins};
  letter-spacing: 0.5px;
`;

export const bodyXSb = css`
  font: normal 500 14px/24px ${poppins};
  letter-spacing: 0.2px;
`;
export const bodyXS = css`
  font: normal 400 14px/24px ${poppins};
  letter-spacing: 0.2px;
`;
export const bodyXXS = css`
  font: normal 400 12px/16px ${poppins};
  letter-spacing: 0.5px;
`;
export const bodyXXSb = css`
  font: normal 500 12px/16px ${poppins};
  letter-spacing: 0.5px;
`;

export const bodyXXXS = css`
  font: normal 400 10px/16px ${poppins};
`;

export const bodySFPro = css`
  font: normal 400 28px/46px ${poppins};
  letter-spacing: 0.5px;
`;

export const button1 = css`
  font: normal 500 16px/24px ${poppins};
  letter-spacing: 0.5px;
`;

export const button2 = css`
  font: normal 500 24px/32px ${poppins};
  letter-spacing: 1px;
`;
export const overline = css`
  font: normal 500 13px/16px ${poppins};
  letter-spacing: 1px;
`;

// TO BE CHECKED IF NEEDED
// export const header4 = css`
//   font: normal 500 24px/32px ${poppins};
// `;

// export const header4 = css`
//   font: normal 500 16px/26px ${poppins};
//   letter-spacing: 1px;
// `;

export const linkText = css`
  font: normal 600 14px/20px ${poppins};
  letter-spacing: 1px;
  text-decoration: underline;
  text-transform: uppercase;
`;

export const linkTextSmall = css`
  font: normal 600 12px/18px ${poppins};
  letter-spacing: 1px;
  text-decoration: underline;
  text-transform: uppercase;
`;
//
export const typography: ThemeTypography = {
  bodyL,
  bodyXM,
  bodyM,
  bodyMb,
  bodyS,
  bodySb,
  bodySm,
  bodyXS,
  bodyXSb,
  bodyXXS,
  bodyXXSb,
  bodyXXXS,
  bodySFPro,
  button1,
  button2,
  header1,
  header2,
  header3,
  header4,
  // header4,
  // header4,
  linkText,
  linkTextSmall,
  overline,
  subtitle1,
  subtitle2,
};

export const font: ThemeFont = {
  poppins,
};
