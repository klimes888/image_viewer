// src/popup/Popup.tsx
import React from "react";

// styles
import * as ds from "./popup.css";

// constants
const TITLE = "이미지 뷰어";
const VIEWER = "뷰어 시작하기";

const Popup = () => {
  const openViewer = () => {
    // 전체보기 모드
    chrome.runtime.sendMessage({ action: "open_viewer" });
  };

  return (
    <div className={ds.container}>
      <h1 className={ds.title}>{TITLE}</h1>
      {/* <input
        type="file"
        webkitdirectory
        multiple
        accept="image/*"
        aria-label="이미지 파일 선택"
      /> */}
      <button className={ds.button} onClick={openViewer}>
        {VIEWER}
      </button>
    </div>
  );
};

export default Popup;
