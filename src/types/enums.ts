export enum OPEN_POPUP {
  NONE = "NONE",
  OPEN = "OPEN",
}

// image context
export enum IMAGE_CONTEXT {
  ADD_IMAGES,
  RESET_IMAGES,
  REMOVE_IMAGE,
  SELECT_IMAGE,
  UNSELECT_IMAGE,
  ALL_SELECT_IMAGE,
}

export enum IMAGE_MODE {
  PREVIEW, // 기본모드
  ALL_SLIDESHOW, // 모든 이미지 슬라이드 쇼
  SELECTED_SLIDESHOW, // 슬라이드 쇼
  ALL_VIEWER, // 모든 이미지 전체 화면
  SELECTED_VIEWER, // 전체 화면
}
