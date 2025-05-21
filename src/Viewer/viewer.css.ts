import { style, styleVariants } from "@vanilla-extract/css";

/**
 * VIEWER style
 */
export const viewer_layout = style({
  position: "relative",
  display: "flex",
  width: "100%",
});

export const viewer_inner = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  padding: "1em",
});

export const viewer_button = style({
  display: "flex",
});

/**
 * SIDE BAR style
 */
export const nav_layout = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  width: "100%",
  height: "3em",
  background: "#fff",
  zIndex: 10,
  boxShadow:
    "0px 1.5px 4px rgba(23, 26, 31, 0.12), 0px 0px 2px rgba(23, 26, 31, 0.16)",
});

export const image_input = style({
  display: "none",
});

export const nav_inner = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.25em",
  padding: "0.25em",
  width: "100%",
  height: "100%",
});

export const base_button_wrap = style({
  position: "relative",
  background: "#fff",
  whiteSpace: "nowrap",
});

export const base_button = style({
  position: "relative",
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

export const popup_layout = style({
  position: "absolute",
  top: "5em",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow:
    "0px 1.5px 4px rgba(23, 26, 31, 0.12), 0px 0px 2px rgba(23, 26, 31, 0.16)",
  zIndex: 9,
});

export const popup_layout_inner = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.25em",
  backgroundColor: "#fff",
  padding: "0.5em",
});

/** Image Viewer */
export const image_layout = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.35em 0.5em",
  width: "100%",
  padding: "3.5em 0.5em 0.5em 0",
});

export const image_wrap = style({
  display: "flex",
  width: "8em",
  height: "8em",
  borderRadius: "0.25em",
  overflow: "hidden",
});

export const image_selected = style({
  border: "0.25em solidrgb(215, 155, 43)",
});

/** Image Carousel Viewer */
export const image_carousel_layout = style({
  position: "relative",
  display: "flex",
  width: "100%",
  height: "100%",
});

export const arrow_button = style({
  display: "flex",
  position: "absolute",
  width: "3.5em",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  opacity: 0,
  top: 0,
  bottom: 0,
  zIndex: 9,
  background: "#fff",
  cursor: "pointer",
  ":hover": {
    opacity: "0.6",
    fontWeight: 700,
    color: "#222",
  },
});

export const arrow_button_variant = styleVariants({
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
});

export const image_view_wrap = style({
  display: "flex",
  width: "100vw",
  flexDirection: "row",
});

/** Input style */
export const input_wrap = style({
  width: "10em",
  height: "2em",
  border: "1px solid #999",
  borderRadius: "0.25em",
  overflow: "hidden",
});

export const input_style = style({
  width: "100%",
  height: "100%",
});

export const button_wrap = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "0.25em",
  gap: "0.2em",
});

export const input_second_button = style({
  width: "3em",
  height: "2em",
  background: "#7ac2e6",
  borderRadius: "0.25em",
  border: "none",
});
