import { Dispatch, SetStateAction } from "react";
import { ImageFile, IMAGE_CONTEXT, IMAGE_MODE } from "../types";

export const {
  ADD_IMAGES,
  RESET_IMAGES,
  REMOVE_IMAGE,
  SELECT_IMAGE,
  UNSELECT_IMAGE,
  ALL_SELECT_IMAGE,
  SET_LOADING,
} = IMAGE_CONTEXT;

export type State = {
  images: ImageFile[];
  isLoading?: boolean;
};

export type Action = {
  type: IMAGE_CONTEXT;
  payload?: ImageFile[] | string | boolean;
};

export type ProviderType = {
  imageState: State;
  imageDispatch: Dispatch<Action>;
  imageMode: IMAGE_MODE;
  setImageMode: Dispatch<SetStateAction<IMAGE_MODE>>;
  slideshowOpen: boolean;
  setSlideshowOpen: Dispatch<SetStateAction<boolean>>;
  curPage: number;
  setCurPage: Dispatch<SetStateAction<number>>;
  slideshowTime: number;
  setSlideshowTime: Dispatch<SetStateAction<number>>;
  splitWindow: number;
  setSplitWindow: Dispatch<SetStateAction<number>>;
};

export const initialState: State = { images: [], isLoading: false };
