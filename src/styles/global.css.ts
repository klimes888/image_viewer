// src/styles/global.css.ts
import { globalStyle } from "@vanilla-extract/css";

// 기본 요소 리셋 및 공통 스타일
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("body", {
  fontFamily: "system-ui, sans-serif",
  lineHeight: "1.5",
});

globalStyle("button", {
  backgroundColor: "transparent",
  cursor: "pointer",
});
