import { style } from "@vanilla-extract/css";

export const layout = style({
  display: "flex",
  backgroundColor: "red",
});

export const title = style({
  fontSize: "1em",
  fontWeight: 600,
});

export const container = style({
  padding: "1em",
  backgroundColor: "#f0f0f0",
  width: "100%",
});

export const button = style({
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#45a049",
  },
});
