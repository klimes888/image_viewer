import { Dispatch, SetStateAction } from "react";
import { ImageFile, IMAGE_CONTEXT, IMAGE_MODE } from "../types";

export const {
  ADD_IMAGES,
  RESET_IMAGES,
  REMOVE_IMAGE,
  SELECT_IMAGE,
  UNSELECT_IMAGE,
} = IMAGE_CONTEXT;

export type Action = { type: IMAGE_CONTEXT; payload?: ImageFile[] | string };

export type ProviderType = {
  imageState: ImageFile[];
  imageDispatch: Dispatch<Action>;
  imageMode?: IMAGE_MODE;
  setImageMode?: Dispatch<SetStateAction<IMAGE_MODE>>;
  slideshowOpen?: boolean;
  setSlideshowOpen?: Dispatch<SetStateAction<boolean>>;
};

export const initialState: ImageFile[] = [];
