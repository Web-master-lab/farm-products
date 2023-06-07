import React from "react";
import { HiddenInput, Label } from "./style";

function Checkbox({
  name,
  value,
  onChange,
  isChecked,
  labelComponent,
  title,
  ...props
}) {
  const LabelComponent = labelComponent;

  return (
    <Label>
      <HiddenInput
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        {...props}
        onChange={() => {
          onChange(value);
        }}
      />
      <LabelComponent $isChecked={isChecked}>{title}</LabelComponent>
    </Label>
  );
}

export default Checkbox;
