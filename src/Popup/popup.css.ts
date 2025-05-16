import { style } from "@vanilla-extract/css";

export const title = style({
  fontSize: "1em",
  fontWeight: 600,
});

export const container = style({
  display: "flex",
  padding: "1em",
  width: "12em",
});

export const button_wrap = style({
  display: "flex",
  columnGap: "0.25em",
  marginBottom: "0.5em",
});

export const button = style({
  padding: "0.5em 1em",
  border: "none",
  borderRadius: "0.25em",
  cursor: "pointer",
  whiteSpace: "nowrap",
  ":hover": {
    backgroundColor: "#45a049",
  },
});
