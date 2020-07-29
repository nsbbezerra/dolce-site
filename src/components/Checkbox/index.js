import React from "react";
import { Label, Checkbox } from "./style";

const CheckboxApp = React.forwardRef((props, ref, ...rest) => {
  const { onChange, checked } = props;
  return (
    <>
      <Checkbox
        id="checkbox"
        type="checkbox"
        checked={props.checked}
        onChange={() => onChange(!checked)}
        {...rest}
        ref={ref}
      />
      <Label htmlFor="checkbox" checked={props.checked} {...rest}>
        {props.children}
      </Label>
    </>
  );
});

export default CheckboxApp;
