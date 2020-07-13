import React from "react";
import { Grid } from "./style";

export default function GridApp({
  children,
  min = 0,
  max = 0,
  gap = 0,
  ...rest
}) {
  return (
    <Grid min={min} max={max} gap={gap} {...rest}>
      {children}
    </Grid>
  );
}
