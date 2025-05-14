// src/styles/global.css.ts
import { globalStyle, style } from "@vanilla-extract/css";

// 기본 요소 리셋 및 공통 스타일
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  backgroundColor: "#999",
});

globalStyle("body", {
  fontFamily: "system-ui, sans-serif",
  lineHeight: "1.5",
  backgroundColor: "#999",
  color: "red",
});

globalStyle("button", {
  cursor: "pointer",
});

export const __forceInclude = style({ display: "none" });
