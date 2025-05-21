import { style } from "@vanilla-extract/css";

/**
 * SplitViewComponent style
 */
export const layout = style({
  display: "flex",
  alignContent: "center",
  marginLeft: "0.5em",
});

export const radioLabel = style({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  gap: "0.35em",
  fontSize: "1em",
});

export const radioInput = style({
  appearance: "none",
  width: "1.1em",
  height: "1.1em",
  border: "0.1em solid #aaa",
  borderRadius: "50%",
  position: "relative",
  transition: "border 0.2s",
  marginLeft: "0.5em",
  selectors: {
    "&:checked": {
      borderColor: "#4CAF50",
    },
    "&:checked::before": {
      content: "",
      position: "absolute",
      top: "0.15em",
      left: "0.15em",
      width: "0.6em",
      height: "0.6em",
      borderRadius: "50%",
      backgroundColor: "#4CAF50",
    },
  },
});
