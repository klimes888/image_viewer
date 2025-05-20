// src/popup/Popup.tsx

import { useEffect, useState } from "react";
import * as vs from "./viewer.css";
import { IMAGE_MODE, ImageFile } from "../types";
import { useImageContent } from "../context/image.context";

const ImageViewer = () => {
  const { imageState, imageMode, curPage, setCurPage, slideshowTime } =
    useImageContent();
  const [curImage, setCurImage] = useState<ImageFile | null>(null);
  const [imageList, setImageList] = useState<ImageFile[]>([]);
  const { SELECTED_VIEWER, SELECTED_SLIDESHOW, ALL_VIEWER, ALL_SLIDESHOW } =
    IMAGE_MODE;
  const pageHnadler = (type: string) => {
    if (type === "left") {
      if (curPage === 0) {
        setCurPage(imageList.length - 1);
      } else {
        setCurPage((prev) => prev - 1);
      }
    }

    if (type === "right") {
      if (curPage === imageList.length - 1) {
        setCurPage(0);
      } else {
        setCurPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    if ([SELECTED_VIEWER, SELECTED_SLIDESHOW].includes(imageMode)) {
      const result = imageState.filter((data) => data.selected);
      setImageList(result);
    } else {
      setImageList(imageState);
    }
  }, [imageMode, imageState]);

  useEffect(() => {
    if ([SELECTED_VIEWER, ALL_VIEWER].includes(imageMode)) return;
    // 슬라이드쇼
  }, [imageMode]);

  useEffect(() => {
    setCurImage(imageList[curPage]);
  }, [curPage, imageList]);

  useEffect(() => {
    if (imageList.length === 0) return;
    if ([SELECTED_VIEWER, ALL_VIEWER].includes(imageMode)) return;

    const timer = setInterval(() => {
      console.log("timmer ------->");
      setCurPage((prev) => (prev + 1) % imageList.length);
    }, slideshowTime * 1000);

    return () => {
      clearInterval(timer); //
    };
  }, [imageMode, slideshowTime, imageList.length]);

  return (
    <section className={vs.image_carousel_layout}>
      <div
        className={`${vs.arrow_button} ${vs.arrow_button_variant["left"]}`}
        onClick={() => pageHnadler("left")}
      >
        Left
      </div>
      <div className={vs.image_view_wrap}>
        <img
          src={curImage?.img}
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "contain",
            objectPosition: "center",
          }}
          alt=""
        />
      </div>
      <div
        className={`${vs.arrow_button} ${vs.arrow_button_variant["right"]}`}
        onClick={() => pageHnadler("right")}
      >
        Right
      </div>
    </section>
  );
};

export default ImageViewer;
