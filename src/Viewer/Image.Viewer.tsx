// src/popup/Popup.tsx

import { memo, useEffect, useState } from "react";
import * as vs from "./viewer.css";
import { IMAGE_MODE, ImageFile } from "../types";
import { useImageContent } from "../context/image.context";

const ImageViewer = () => {
  const {
    imageState,
    imageMode,
    curPage,
    setCurPage,
    slideshowTime,
    splitWindow,
  } = useImageContent();
  const [curImage, setCurImage] = useState<ImageFile[]>([]);
  const [imageList, setImageList] = useState<ImageFile[]>([]);
  const { SELECTED_VIEWER, SELECTED_SLIDESHOW, ALL_VIEWER } = IMAGE_MODE;

  const pageHandler = (type: "left" | "right") => {
    const step = [1, 2].includes(splitWindow) ? 2 : 1;
    const totalPages = imageList.length;

    if (type === "left") {
      setCurPage((prev) =>
        prev - step < 0
          ? (totalPages - step + (totalPages % step)) % totalPages
          : prev - step
      );
    }

    if (type === "right") {
      setCurPage((prev) => (prev + step) % totalPages);
    }
  };

  useEffect(() => {
    if ([SELECTED_VIEWER, SELECTED_SLIDESHOW].includes(imageMode)) {
      const result = imageState.images.filter((data) => data.selected);
      setImageList(result);
    } else {
      setImageList(imageState.images);
    }
  }, [imageMode, imageState]);

  useEffect(() => {
    const step = [1, 2].includes(splitWindow) ? 2 : 1;
    const slice = imageList.slice(curPage, curPage + step);

    // 이미지가 부족하면 앞에서 다시 채움 (순환 보완)
    const padded =
      slice.length < step
        ? [...slice, ...imageList.slice(0, step - slice.length)]
        : slice;

    const array = [...padded];
    if (splitWindow === 2) {
      for (let i = 0; i < array.length - 1; i += 2) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }

    setCurImage(array);
  }, [curPage, imageList, splitWindow]);

  // slide 타이머
  useEffect(() => {
    if (imageList.length === 0) return;
    if ([SELECTED_VIEWER, ALL_VIEWER].includes(imageMode)) return;

    const step = [1, 2].includes(splitWindow) ? 2 : 1;

    const timer = setInterval(() => {
      setCurPage((prev) => (prev + step) % imageList.length);
    }, slideshowTime * 1000);

    return () => clearInterval(timer);
  }, [imageMode, slideshowTime, imageList.length, splitWindow]);

  return (
    <section className={vs.image_carousel_layout}>
      <div
        className={`${vs.arrow_button} ${vs.arrow_button_variant["left"]}`}
        onClick={() => pageHandler("left")}
      >
        Left
      </div>
      <div className={vs.image_view_wrap}>
        {curImage.map((img, i) => (
          <img
            key={i}
            src={img.img}
            style={{
              width: [1, 2].includes(splitWindow) ? "50vw" : "100vw",
              height: "100vh",
              objectFit: "contain",
              objectPosition: "center",
            }}
            alt=""
          />
        ))}
      </div>
      <div
        className={`${vs.arrow_button} ${vs.arrow_button_variant["right"]}`}
        onClick={() => pageHandler("right")}
      >
        Right
      </div>
    </section>
  );
};

export default memo(ImageViewer);
