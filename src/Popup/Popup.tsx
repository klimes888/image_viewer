// src/popup/Popup.tsx
import React from "react";

const Popup: React.FC = () => {
  const openViewer = () => {
    chrome.runtime.sendMessage({ action: "open_viewer" });
  };

  return (
    <div>
      <h1>Local Image Viewer</h1>
      <input
        type="file"
        multiple
        accept="image/*"
        aria-label="이미지 파일 선택"
      />
      <button onClick={openViewer}>전체 보기</button>
    </div>
  );
};

export default Popup;
