import {CustomComponent} from "../../models/customComponent";

export type ButtonStyleType =
  | 'standard'
  | 'link'
  | 'link-neutral'
  | 'link-base'
  | 'link-white'
  | 'link-blue'
  | 'lighter-blue'
  | 'light1'
  | 'delete'
  | 'base-filled'
  | 'error'
  | 'error-filled'
  | 'standard-rounded'
  | 'base'
  | 'menu'
  | 'menu-mini'
  | 'background-delete'
  | 'icon'
  | 'icon-primary'
  | 'white-blue'
  | 'primary'
  | 'filled-white'
  | 'standard-mobile'
  | 'secondary';

export type ButtonSuccessStyleType =
  | 'standard_success'
  | 'link_success'
  | 'link-base_success'
  | 'link-neutral_success'
  | 'link-blue_success'
  | 'link-white_success'
  | 'lighter-blue_success'
  | 'light1_success'
  | 'delete_success'
  | 'base-filled_success'
  | 'error_success'
  | 'error-filled_success'
  | 'standard-rounded_success'
  | 'base_success'
  | 'menu_success'
  | 'menu-mini_success'
  | 'background-delete_success'
  | 'icon_success'
  | 'icon-primary_success'
  | 'white-blue_success'
  | 'primary_success'
  | 'filled-white_success'
  | 'standard-mobile_success'
  | 'secondary_success';

export interface ButtonProps extends CustomComponent {
  active?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  fillButton?: boolean;
  fit?: boolean;
  mini?: boolean;
  hidden?: boolean;
  onClick?: (event: any) => void;
  styleType?: ButtonStyleType;
  type?: 'submit' | 'reset' | 'button';
  spinner: (props: any) => JSX.Element
}

export interface StyledButtonProps {
  disabled?: boolean;
  isLoading?: boolean;
  fillButton?: boolean;
  hidden?: boolean;
  fit?: boolean;
  mini?: boolean;
  styleType?: ButtonStyleType | ButtonSuccessStyleType;
}
