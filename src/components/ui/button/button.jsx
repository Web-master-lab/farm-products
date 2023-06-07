import React from "react";
import { StyledButton } from "./style";

function Button({ children, link, className, ...props }) {
  return (
    <StyledButton
      className={className}
      {...(link ? { to: link } : { as: "button", type: "button" })}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
