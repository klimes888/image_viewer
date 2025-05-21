// context/ImageContext.tsx
import {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  useState,
} from "react";
import { ImageFile, IMAGE_MODE } from "../types";
import {
  Action,
  ProviderType,
  initialState,
  ADD_IMAGES,
  RESET_IMAGES,
  REMOVE_IMAGE,
  SELECT_IMAGE,
  UNSELECT_IMAGE,
  ALL_SELECT_IMAGE,
} from "./image.constants";

const reducer = (state: ImageFile[], action: Action): ImageFile[] => {
  switch (action.type) {
    case ADD_IMAGES:
      if (typeof action.payload === "string" || !action.payload) return state;
      return [...state, ...action.payload].map((data, id) => ({
        ...data,
        img: URL.createObjectURL(data.file),
        id,
      }));
    case RESET_IMAGES:
      return [];
    case SELECT_IMAGE:
      return state.map((data) => {
        if (Number(action.payload) === data.id) {
          return { ...data, selected: data.selected ? false : true };
        } else {
          return data;
        }
      });
    case UNSELECT_IMAGE:
      return state.map((data) => ({ ...data, selected: false }));
    case ALL_SELECT_IMAGE:
      return state.map((data) => ({ ...data, selected: true }));
    case REMOVE_IMAGE:
      return state.filter((img) => !img.selected);
    default:
      return state;
  }
};

const ImageContext = createContext<ProviderType | null>(null);

export const useImageContent = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImage must be used within a ImagrProvider");
  }
  return context;
};

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [imageState, imageDispatch] = useReducer(reducer, initialState);
  const [imageMode, setImageMode] = useState(IMAGE_MODE.PREVIEW);
  const [slideshowOpen, setSlideshowOpen] = useState(false);
  // const [viewMode, setViewMode] = useState();

  // 페이지 조절
  const [curPage, setCurPage] = useState(0);

  // 시간 조절
  const [slideshowTime, setSlideshowTime] = useState(10);

  // 분할 조절
  const [splitWindow, setSplitWindow] = useState(0);

  return (
    <ImageContext.Provider
      value={{
        imageState,
        imageDispatch,
        imageMode,
        setImageMode,
        slideshowOpen,
        setSlideshowOpen,
        curPage,
        setCurPage,
        slideshowTime,
        setSlideshowTime,
        splitWindow,
        setSplitWindow,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
