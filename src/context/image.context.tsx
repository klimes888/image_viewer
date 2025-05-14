// context/ImageContext.tsx
import React, { createContext, useReducer, ReactNode, Dispatch } from "react";
import { ImageFile, IMAGE_CONTEXT } from "../types";

type State = {
  images: ImageFile[];
};

const { ADD_IMAGES, RESET_IMAGES, REMOVE_IMAGE } = IMAGE_CONTEXT;

type Action = { type: IMAGE_CONTEXT; payload?: ImageFile[] | string };

const initialState: State = {
  images: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ADD_IMAGES:
      if (typeof action.payload === "string" || !action.payload) return state;
      return { images: [...state.images, ...action.payload] };
    case RESET_IMAGES:
      return { images: [] };
    case REMOVE_IMAGE:
      return {
        images: state.images.filter((img) => img.path !== action.payload),
      };
    default:
      return state;
  }
};

export const ImageContext = createContext<{
  imageState: State;
  imageDispatch: Dispatch<Action>;
}>({ imageState: initialState, imageDispatch: () => null });

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [imageState, imageDispatch] = useReducer(reducer, initialState);

  return (
    <ImageContext.Provider value={{ imageState, imageDispatch }}>
      {children}
    </ImageContext.Provider>
  );
};
