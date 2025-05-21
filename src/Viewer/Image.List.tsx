// src/popup/Popup.tsx

import { useImageContent } from "../context/image.context";
import { IMAGE_CONTEXT } from "../types";
import * as vs from "./viewer.css";

const ImageList = () => {
  // context
  const { imageState, imageDispatch } = useImageContent();
  return (
    <section className={vs.image_layout}>
      {imageState.isLoading ? (
        <div style={{ fontSize: "2em" }}>로딩중</div>
      ) : (
        imageState.images.map((data) => {
          return (
            <div
              className={`${vs.image_wrap} ${
                data.selected && vs.image_selected
              }`}
              onClick={() => {
                imageDispatch({
                  type: IMAGE_CONTEXT.SET_LOADING,
                  payload: true,
                });

                imageDispatch({
                  type: IMAGE_CONTEXT.SELECT_IMAGE,
                  payload: String(data.id),
                });
              }}
              key={data.id}
            >
              <img src={data.img} alt="" />
            </div>
          );
        })
      )}
    </section>
  );
};

export default ImageList;
