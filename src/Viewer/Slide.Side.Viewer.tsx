import * as vs from "./viewer.css";

// context
import { useImageContent } from "../context/image.context";
import { IMAGE_MODE } from "../types";
import SplitViewComponent from "../Component/SplitView.Component";

const SlideSideViewer = ({ type }: { type: IMAGE_MODE }) => {
  const { SELECTED_SLIDESHOW, ALL_SLIDESHOW } = IMAGE_MODE;
  const isSlideShow = [SELECTED_SLIDESHOW, ALL_SLIDESHOW].includes(type);
  // context
  const { setImageMode, slideshowTime, setSlideshowTime } = useImageContent();

  // ref
  return (
    <nav className={vs.nav_layout}>
      <div className={vs.nav_inner}>
        <div className={vs.base_button_wrap}>
          <button
            onClick={() => setImageMode(IMAGE_MODE.PREVIEW)}
            className={`${vs.base_button} ${vs.button_variant["active"]}`}
          >
            {isSlideShow ? "슬라이드 쇼 중지" : "전체 화면 중지"}
          </button>
        </div>
        {isSlideShow ? (
          <>
            <div className={vs.input_wrap}>
              <input
                className={vs.input_style}
                aria-label="slide-show-time"
                type="number"
                min="1"
                max="60"
                value={slideshowTime}
                onChange={({ target }) => {
                  const value = Number(target.value);
                  if (!isNaN(value)) {
                    setSlideshowTime(value);
                  }
                }}
              />
            </div>
            <div className={vs.button_wrap}>
              <button
                onClick={() => {
                  setSlideshowTime((prev) => {
                    if (prev === 1) return prev;
                    return prev - 1;
                  });
                }}
                className={vs.input_second_button}
              >
                1초 -
              </button>
              <button
                onClick={() => {
                  setSlideshowTime((prev) => {
                    if (prev === 60) return prev;
                    return prev + 1;
                  });
                }}
                className={vs.input_second_button}
              >
                1초 +
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
        <SplitViewComponent />
      </div>
    </nav>
  );
};

export default SlideSideViewer;
