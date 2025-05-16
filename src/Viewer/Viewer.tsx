// src/popup/Popup.tsx
import SideViewer from "./Side.Viewer";

import * as vs from "./viewer.css";

const Viewer = () => {
  const maximumSizeControl = () => {
    chrome.windows.getCurrent({}, (window) => {
      chrome.windows.update(window.id!, {
        state: "maximized", // ✅ OS 수준의 최대화 요청
      });
    });
  };

  return (
    <body className={vs.viewer_layout}>
      <SideViewer />
      <button className={vs.viewer_button} onClick={maximumSizeControl}>
        최대 사이즈
      </button>
    </body>
  );
};

export default Viewer;
