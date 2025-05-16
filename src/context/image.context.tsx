// context/ImageContext.tsx
import {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useContext,
} from "react";
import { ImageFile, IMAGE_CONTEXT } from "../types";

const { ADD_IMAGES, RESET_IMAGES, REMOVE_IMAGE } = IMAGE_CONTEXT;

type Action = { type: IMAGE_CONTEXT; payload?: ImageFile[] | string };

const initialState: ImageFile[] = [];

const reducer = (state: ImageFile[], action: Action): ImageFile[] => {
  switch (action.type) {
    case ADD_IMAGES:
      if (typeof action.payload === "string" || !action.payload) return state;
      return [...state, ...action.payload].map((data, id) => ({ ...data, id }));
    case RESET_IMAGES:
      return [];
    case REMOVE_IMAGE:
      return state.filter((img) => img.selected);
    default:
      return state;
  }
};

const ImageContext = createContext<{
  imageState: ImageFile[];
  imageDispatch: Dispatch<Action>;
}>({ imageState: initialState, imageDispatch: () => null });

export const useImageContent = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImage must be used within a ImagrProvider");
  }
  return context;
};

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [imageState, imageDispatch] = useReducer(reducer, initialState);

  return (
    <ImageContext.Provider value={{ imageState, imageDispatch }}>
      {children}
    </ImageContext.Provider>
  );
};
