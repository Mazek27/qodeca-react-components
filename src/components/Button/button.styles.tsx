/* eslint-disable no-undefined */
import styled from '@emotion/styled/macro';

import { css } from '@emotion/react';

import {ButtonProps, StyledButtonProps} from './button.models';
import {rgba} from "../../common/utils/colors";
import {typography} from "../../common/consts/typography";

export const ButtonWrapper = styled.button<StyledButtonProps>`
  font-family: ${({ theme }) => theme.font.poppins};
  font-size: 1rem;
  font-weight: 700;
  line-height: 2rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  letter-spacing: 0.11em;
  padding: 12px 11px;
  max-width: 443px;
  transition: background-color 200ms linear;

  ${({ fillButton }) =>
    fillButton &&
    css`
      width: 100%;
      max-width: unset;
    `}

  ${({ fit }) =>
    fit &&
    css`
      width: fit-content;
      max-width: unset;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}


  ${({ styleType, theme }) => {
    switch (styleType) {
      case 'menu':
        return css`
          background-color: ${theme.color.neutral_2_50};
          color: ${theme.color.shield_black};
          padding: 16px 9px;
        `;
      case 'standard':
        return css`
          background-color: ${theme.color.primary};
          color: ${theme.color.white};
        `;
      case 'primary':
        return css`
          background-color: ${theme.color.primary40};
          color: ${theme.color.white};
        `;
      case 'base':
        return css`
          background-color: transparent;
          border: 1px solid ${theme.color.accent_500};
          color: ${theme.color.accent_500};
          border-radius: 12px;

          path {
            fill: ${theme.color.accent_500};
          }
        `;
      case 'base-filled':
        return css`
          background-color: ${theme.color.accent_500};
          color: ${theme.color.white};
          border-radius: 12px;

          path {
            fill: ${theme.color.white};
          }

          &.disabled {
            background-color: ${theme.color.accent_200};
          }
        `;
      case 'error':
        return css`
          background-color: ${theme.color.white};
          border: 1px solid ${theme.color.accent_500};
          color: ${theme.color.accent_500};
          border-radius: 12px;

          path {
            fill: ${theme.color.accent_500};
          }
        `;
      case 'error-filled':
        return css`
          background-color: ${theme.color.error_500};
          color: ${theme.color.white};
          border-radius: 12px;

          path {
            fill: ${theme.color.white};
          }
        `;
      case 'link':
        return css`
          background: none;
          color: ${theme.color.primary_500};
          height: auto;
          padding: 0;
          border-radius: 0;
          letter-spacing: 0.0125rem;

          &.disabled {
            & > {
              stroke: ${theme.color.dark2};
            }
          }

          path {
            &[fill] {
              fill: ${theme.color.primary_500};
            }

            &[stroke] {
              stroke: ${theme.color.primary_500};
            }
          }

          &:hover {
            text-decoration: none;
          }
        `;
      case 'link-neutral':
        return css`
          background: none;
          color: ${theme.color.neutral_2_700};
          height: auto;
          padding: 0;
          border-radius: 0;
          letter-spacing: 0.0125rem;

          &:hover {
            text-decoration: none;
          }

          path {
            &[fill] {
              fill: ${theme.color.neutral_2_700};
            }

            &[stroke] {
              stroke: ${theme.color.neutral_2_700};
            }
          }
        `;
      case 'standard-mobile':
        return css`
          background-color: ${theme.color.white};
          border: 1px solid ${theme.color.primary_200};
          color: ${theme.color.accent_500};
          border-radius: 12px;
        `;
      case 'link-white':
        return css`
          background: none;
          color: ${theme.color.white};
          height: auto;
          padding: 0;
          border-radius: 0;
          letter-spacing: 0.0125rem;

          &:hover {
            text-decoration: none;
          }

          path {
            &[fill] {
              fill: ${theme.color.white};
            }

            &[stroke] {
              stroke: ${theme.color.white};
            }
          }
        `;
      case 'link-base':
        return css`
          background: none;
          color: ${theme.color.accent_500};
          height: auto;
          padding: 0;
          width: fit-content;

          border-radius: 0;
          letter-spacing: 0.0125rem;

          &:hover {
            text-decoration: none;
          }

          path {
            &[fill] {
              fill: ${theme.color.accent_500};
            }

            &[stroke] {
              stroke: ${theme.color.accent_500};
            }
          }
        `;

      case 'link-blue':
        return css`
          background: none;
          color: ${theme.color.primary_500};
          height: auto;
          padding: 0;
          width: fit-content;

          border-radius: 0;
          letter-spacing: 0.5px;

          &:hover {
            text-decoration: underline;
            color: ${theme.color.accent_500};
          }

          path {
            &[fill] {
              fill: ${theme.color.primary_500};
            }

            &[stroke] {
              stroke: ${theme.color.primary_500};
            }
          }
        `;
      case 'lighter-blue':
        return css`
          background-color: transparent;
          color: ${theme.color.secondary3};
          border: 1px solid ${theme.color.secondary3};
        `;
      case 'light1':
        return css`
          background-color: ${theme.color.light1};
          color: ${theme.color.secondary1};
        `;
      case 'delete':
        return css`
          background: none;
          color: ${theme.color.error};

          &.disabled {
            & > {
              stroke: ${theme.color.dark2};
            }
          }
        `;
      case 'background-delete':
        return css`
          background: ${theme.color.error};
          color: ${theme.color.white};
        `;
      case 'standard-rounded':
        return css`
          width: 100%;
          background-color: ${theme.color.primary};
          color: ${theme.color.white};
        `;
      case 'white-blue':
        return css`
          background-color: transparent;
          color: ${theme.color.primary_500};
          border: 1px solid ${theme.color.primary_500};
          border-radius: 12px;
          letter-spacing: 0.5px;

          path {
            &[fill] {
              fill: ${theme.color.primary_500};
            }

            &[stroke] {
              stroke: ${theme.color.primary_500};
            }
          }
        `;
      case 'white-blue_success':
        return css`
          width: 100%;
          background-color: ${theme.color.success_50};
          color: ${theme.color.success_500};
          border: 1px solid ${theme.color.success_500};
          border-radius: 12px;

          path {
            &[fill] {
              fill: ${theme.color.success_500};
            }

            &[stroke] {
              stroke: ${theme.color.success_500};
            }
          }

          .disabled {
            opacity: 0.5;
          }
        `;
      case 'icon':
        return css`
          background: none;
          color: none;
          font-weight: bold;
          padding: 0;
          height: auto;
          margin: 0;
          line-height: 0;

          &.disabled {
            & > {
              stroke: ${theme.color.dark2};
            }
          }
        `;
      case 'icon_success':
        return css`
          display: block !important;
          background: none;
          color: transparent;
          font-weight: bold;
          padding: 0;
          height: auto;
          margin: 0;
          line-height: 0;

          &.disabled {
            & > {
              stroke: ${theme.color.dark2};
            }
          }
        `;
      case 'icon-primary':
        return css`
          display: block !important;
          background: none;
          color: ${theme.color.primary_500};
          font-weight: bold;
          padding: 0;
          height: auto;
          margin: 0;
          line-height: 0;

          &.disabled {
            & > {
              stroke: ${theme.color.dark2};
            }
          }

          path {
            &[fill] {
              fill: ${theme.color.primary_500};
            }

            &[stroke] {
              stroke: ${theme.color.primary_500};
            }
          }
        `;
      case 'secondary':
        return css`
          background-color: ${theme.color.secondary1};
          color: ${theme.color.white};
        `;

      case 'filled-white':
        return css`
          background-color: ${theme.color.white};
          color: ${theme.color.accent_500};

          &:disabled {
            background-color: ${rgba(theme.color.white, 0.2)};

            div {
              color: ${theme.color.white};
              opacity: 0.6;
            }
          }
        `;
    }
  }}

  ${({ mini, styleType }) => {
    if (mini) {
      return css`
        padding: 9px 16.5px;
      `;
    }
  }}

  ${({ isLoading }) =>
    isLoading &&
    css`
      cursor: not-allowed;
    `}

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const ButtonContentContainer = styled.div`
  display: flex;
  height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  letter-spacing: 0.5px;
  justify-content: center;
  ${typography.button1};
`;
