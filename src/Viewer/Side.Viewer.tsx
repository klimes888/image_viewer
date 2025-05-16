import React, { useRef, useState } from "react";

import * as vs from "./viewer.css";

// context
import { useImageContent } from "../context/image.context";
import { IMAGE_CONTEXT } from "../types";

const SideViewer = () => {
  const { ADD_IMAGES } = IMAGE_CONTEXT;
  // context
  const { imageDispatch } = useImageContent();
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

  const buttons = [
    { title: "이미지 업로드", trigger: handleButtonClick },
    { title: "전체보기", trigger: () => {} },
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
      </div>
    </nav>
  );
};

export default SideViewer;
