import * as vs from "./viewer.css";

// context
import { useImageContent } from "../context/image.context";
import { IMAGE_MODE } from "../types";

const SlideSideViewer = () => {
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
            슬라이드 쇼 중지
          </button>
          <input
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
      </div>
    </nav>
  );
};

export default SlideSideViewer;
