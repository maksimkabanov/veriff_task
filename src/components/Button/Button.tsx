import React from "react";
import {ButtonStyled} from "./Button.styles";

type ButtonProps = {
  children: string,
  disabled?: boolean,
  enabled?: boolean,
  type?: "button" | "submit" | "reset" | undefined,
  onClick: () => void
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
