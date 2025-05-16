// src/popup/Popup.tsx
import React from "react";

// styles
import * as ps from "./popup.css";

// constants
const TITLE = "이미지 뷰어";
const VIEWER = "로컬 이미지 뷰어";
const CRAWLER = "크롤러 뷰어";

const Popup = () => {
  const openViewer = () => {
    // 전체보기 모드
    chrome.runtime.sendMessage({ action: "open_viewer" });
  };

  return (
    <body className={ps.container}>
      <h1 className={ps.title}>{TITLE}</h1>
      <div className={ps.button_wrap}>
        <button className={ps.button} onClick={openViewer}>
          {VIEWER}
        </button>
      </div>
      <div className={ps.button_wrap}>
        <button className={ps.button} onClick={() => {}}>
          {CRAWLER}
        </button>
      </div>
    </body>
  );
};

export default Popup;
