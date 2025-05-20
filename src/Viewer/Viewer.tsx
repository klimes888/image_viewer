// src/popup/Popup.tsx
import { useImageContent } from "../context/image.context";
import { IMAGE_MODE } from "../types";
import ImageList from "./Image.List";
import ImageViewer from "./Image.Viewer";
import SideViewer from "./Side.Viewer";
import SlideSideViewer from "./Slide.Side.Viewer";

import * as vs from "./viewer.css";

const Viewer = () => {
  const { imageMode } = useImageContent();
  const maximumSizeControl = () => {
    chrome.windows.getCurrent({}, (window) => {
      chrome.windows.update(window.id!, {
        state: "maximized", // ✅ OS 수준의 최대화 요청
      });
    });
  };
  const {
    PREVIEW,
    SELECTED_SLIDESHOW,
    ALL_SLIDESHOW,
    ALL_VIEWER,
    SELECTED_VIEWER,
  } = IMAGE_MODE;

  const viewRender = () => {
    if (imageMode === PREVIEW) {
      return <ImageList />;
    } else {
      return <ImageViewer />;
    }
  };

  return (
    <div className={vs.viewer_layout}>
      {[SELECTED_SLIDESHOW, ALL_SLIDESHOW].includes(imageMode) ? (
        <SlideSideViewer />
      ) : (
        <SideViewer />
      )}
      <div className={vs.viewer_layout}>{viewRender()}</div>
      {/* <button className={vs.viewer_button} onClick={maximumSizeControl}>
        최대 사이즈
      </button> */}
    </div>
  );
};

export default Viewer;
