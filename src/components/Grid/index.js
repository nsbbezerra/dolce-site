import React from "react";
import { Grid } from "./style";

const GridApp = React.forwardRef((props, ref, ...rest) => {
  return (
    <Grid min={props.min} max={props.max} gap={props.gap} {...rest} ref={ref}>
      {props.children}
    </Grid>
  );
});

export default GridApp;
