import React from 'react';
import { ButtonProps } from './button.models';
import {
  ButtonContentContainer,
  ButtonWrapper,
} from './button.styles';

const Button = ({
  children,
  className,
  disabled,
  isLoading = false,
  onClick,
  styleType = 'standard',
  type = 'button',
  fillButton,
  fit,
  active,
  hidden,
                  spinner: Spinner
}: ButtonProps) => (
  <ButtonWrapper
    disabled={disabled || isLoading}
    onClick={onClick}
    hidden={hidden}
    type={type}
    fillButton={fillButton}
    fit={fit}
    styleType={active ? `${styleType}_success` : styleType}
    className={className}
  >
    <ButtonContentContainer>
      {isLoading && <Spinner delaySpinner={0} mode="dark" />}
      {children}
    </ButtonContentContainer>
  </ButtonWrapper>
);

export default Button;
