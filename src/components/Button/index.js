import React from "react";
import { Button, Label, Content } from "./style";
import general from "../../configs/general";

const ButtonComponent = React.forwardRef((props, ref, ...rest) => {
  const dark = { background: general.colors.dark, color: general.colors.dark };
  const gold = { background: general.colors.gold, color: general.colors.dark };
  const light = {
    background: general.colors.light,
    color: general.colors.dark,
  };
  const negative = {
    background: general.colors.negative,
    color: general.colors.dark,
  };
  const success = {
    background: general.colors.success,
    color: general.colors.dark,
  };
  const red = { background: general.colors.error, color: general.colors.dark };

  function handleColors() {
    switch (props.theme) {
      case "gold":
        return gold;
      case "dark":
        return dark;
      case "light":
        return light;
      case "red":
        return red;
      case "negative":
        return negative;
      case "success":
        return success;
      default:
        return gold;
    }
  }

  return (
    <Button
      background={handleColors().background}
      color={handleColors().color}
      outlined={props.outlined}
      full={props.full}
      {...rest}
      ref={ref}
    >
      <Label
        background={handleColors().background}
        small={small}
        outlined={outlined}
      >
        {props.children ? props.children[0] : ""}
      </Label>
      <Content>{props.children ? props.children[1] : ""}</Content>
    </Button>
  );
});

export default ButtonComponent;
