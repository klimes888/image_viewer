import { useEffect, useRef, useState, useMemo } from "react";

import * as vs from "./viewer.css";

// context
import { useImageContent } from "../context/image.context";
import { IMAGE_CONTEXT } from "../types";
import { IMAGE_MODE } from "../types";
import useModalClickOutsideHook from "../hooks/useModalOff.Hook";

const SideViewer = () => {
  const { ADD_IMAGES, UNSELECT_IMAGE, REMOVE_IMAGE, ALL_SELECT_IMAGE } =
    IMAGE_CONTEXT;
  const [slideshowOpen, setSlideshowOpen] = useState<number | null>(null);
  const [rightButton, setRightButton] = useState<
    | {
        id: number;
        title: string[];
        active: boolean;
      }[]
    | null
  >(null);

  // hooks
  const ref = useModalClickOutsideHook(() => setSlideshowOpen(null));

  // context
  const { imageDispatch, imageState, setImageMode } = useImageContent();

  // ref
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async ({ target }: { target: HTMLInputElement }) => {
    if (target.files === null) return;

    const result = [];
    if (!target.files || target.files.length <= 0) return;
    for (const file of Array.from(target.files)) {
      result.push({
        selected: false,
        file,
      });
    }

    imageDispatch({ type: ADD_IMAGES, payload: result });
  };

  const handleButtonClick = () => {
    // 버튼 클릭 시 input 요소를 프로그램적으로 클릭
    if (
      fileInputRef &&
      "current" in fileInputRef &&
      fileInputRef.current !== null
    ) {
      fileInputRef.current.click();
    }
  };

  const isSelected = imageState.find(({ selected }) => selected);
  const handleSelectControll = (id: number) => {
    if (!rightButton) return;
    if (id === 0 && isSelected) {
      // 전체 선택 해제
      imageDispatch({ type: UNSELECT_IMAGE });
    } else if (id === 0 && !isSelected) {
      // 전체 선택
      imageDispatch({ type: ALL_SELECT_IMAGE });
    }

    if (id === 1 || id === 2) {
      setSlideshowOpen(slideshowOpen ? null : id);
    } else {
      setSlideshowOpen(null);
    }
  };

  const selectImageRemove = () => {
    imageDispatch({ type: REMOVE_IMAGE });
  };

  const rightBtn = useMemo(
    () => [
      {
        id: 0,
        title: ["전체 선택", "전체 선택 해제"],
        active:
          imageState.length > 0 && !imageState.find((data) => !data.selected),
      },
      {
        id: 1,
        title: ["전체 화면 보기"],
        active: imageState.length > 0,
      },
      {
        id: 2,
        title: ["슬라이드쇼"],
        active: imageState.length > 0,
      },
    ],
    [imageState]
  );

  useEffect(() => {
    setRightButton(rightBtn);
  }, []);

  useEffect(() => {
    if (!rightButton) return;
    const test = rightButton?.map((data) => {
      if ([0, 2].includes(data.id)) {
        return { ...data, active: !!isSelected };
      } else if (data.id === 1) {
        return { ...data, active: imageState.length > 0 };
      } else {
        return data;
      }
    });
    setRightButton(test);
  }, [isSelected, imageState]);

  const buttons = [
    { title: "이미지 업로드", trigger: handleButtonClick },
    // { title: "자동 넘기기 시작", trigger: () => {} },
  ];

  const defaultViewPopup = [
    {
      title: "선택한 이미지 보기",
      trigger: () => [setImageMode(IMAGE_MODE.SELECTED_VIEWER)],
    },
    {
      title: "전체 이미지 보기",
      trigger: () => [setImageMode(IMAGE_MODE.ALL_VIEWER)],
    },
  ];

  const slideViewPopup = [
    {
      title: "선택한 이미지 슬라이드쇼",
      trigger: () => {
        if (isSelected) {
          // 선택한게 있어야함
          setImageMode(IMAGE_MODE.SELECTED_SLIDESHOW);
        } else {
          alert("이미지를 선택해주세요");
        }
      },
    },
    {
      title: "전체 이미지 슬라이드쇼",
      trigger: () => [setImageMode(IMAGE_MODE.ALL_SLIDESHOW)],
    },
  ];

  const popupRender = (id: number) => {
    const result = id === 1 ? defaultViewPopup : id === 2 ? slideViewPopup : [];
    return result.map(({ trigger, title }) => {
      return (
        <button
          onClick={() => [trigger(), setSlideshowOpen(null)]}
          className={`${vs.base_button} ${vs.button_variant["active"]}`}
        >
          {title}
        </button>
      );
    });
  };

  return (
    <nav className={vs.nav_layout}>
      <div className={vs.nav_inner}>
        <input
          ref={fileInputRef}
          className={vs.image_input}
          type="file"
          webkitdirectory
          multiple
          accept="image/*"
          aria-label="이미지 파일 선택"
          onChange={handleFileChange}
        />
        {buttons.map(({ title, trigger }) => (
          <button
            key={title}
            onClick={() => trigger()}
            className={`${vs.base_button} ${vs.button_variant["active"]}`}
          >
            {title}
          </button>
        ))}
        {rightButton &&
          rightButton.map(({ id, title, active }) => {
            return (
              <div className={vs.base_button_wrap}>
                <button
                  key={id}
                  onClick={() => handleSelectControll(id)}
                  className={`${vs.base_button} ${
                    vs.button_variant[!active ? "inactive" : "active"]
                  }`}
                >
                  {title[id === 0 && active ? 1 : 0]}
                </button>
                {id === slideshowOpen && (
                  <div ref={ref} className={vs.popup_layout}>
                    <div className={vs.popup_layout_inner}>
                      {popupRender(id)}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        {/* {slideshowOpen} */}
        {isSelected && (
          <button onClick={selectImageRemove} className={vs.base_button}>
            선택 이미지 삭제
          </button>
        )}
      </div>
    </nav>
  );
};

export default SideViewer;
