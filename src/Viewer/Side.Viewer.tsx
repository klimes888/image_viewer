import { useEffect, useRef, useState, useMemo } from "react";

import * as vs from "./viewer.css";

// context
import { useImageContent } from "../context/image.context";
import { IMAGE_CONTEXT } from "../types";

const SideViewer = () => {
  const { ADD_IMAGES, UNSELECT_IMAGE, REMOVE_IMAGE } = IMAGE_CONTEXT;

  const [rightButton, setRightButton] = useState<
    | {
        id: number;
        title: string[];
        active: boolean;
      }[]
    | null
  >(null);

  // context
  const { imageDispatch, imageState } = useImageContent();
  // ref
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [targetBtn, setTargetBtn] = useState("test");

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
    }

    if (id === 0 && !isSelected) {
      // 전체 선택
      imageDispatch({ type: UNSELECT_IMAGE });
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
        active: false,
      },
      {
        id: 1,
        title: ["전체보기"],
        active: false,
      },
      {
        id: 2,
        title: ["슬라이드쇼"],
        active: false,
      },
    ],
    []
  );

  useEffect(() => {
    setRightButton(rightBtn);
  }, [rightBtn]);

  useEffect(() => {
    if (!rightButton) return;
    const test = rightButton?.map((data) =>
      data.id === 0 ? { ...data, active: !!isSelected } : data
    );
    setRightButton(test);
  }, [rightButton, isSelected]);

  const buttons = [
    { title: "이미지 업로드", trigger: handleButtonClick },
    { title: "자동 넘기기 시작", trigger: () => {} },
  ];

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
            onClick={() => [setTargetBtn(title), trigger()]}
            className={`${vs.base_button} ${
              vs.button_variant[targetBtn === title ? "active" : "inactive"]
            }`}
          >
            {title}
          </button>
        ))}
        {rightButton &&
          rightButton.map(({ id, title, active }) => {
            return (
              <button
                key={id}
                onClick={() => handleSelectControll(id)}
                className={`${vs.base_button} ${
                  vs.button_variant[id === 0 && !active ? "inactive" : "active"]
                }`}
              >
                {title[id === 0 && active ? 1 : 0]}
              </button>
            );
          })}
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
