import { style, styleVariants } from "@vanilla-extract/css";

/**
 * VIEWER style
 */
export const viewer_layout = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const viewer_button = style({
  display: "flex",
});

/**
 * SIDE BAR style
 */
export const nav_layout = style({
  display: "flex",
  width: "100%",
  height: "3em",
  background: "#999",
});

export const image_input = style({
  display: "none",
});

export const nav_inner = style({
  display: "flex",
  width: "100%",
  height: "100%",
});

export const base_button = style({
  padding: "0.5em 1em",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: 600,
  transition: "background-color 0.2s ease",
});

export const button_variant = styleVariants({
  active: {
    backgroundColor: "#4CAF50",
    color: "#fff",
  },
  inactive: {
    backgroundColor: "#e0e0e0",
    color: "#333",
  },
});
