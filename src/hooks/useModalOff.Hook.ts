"use client";
import { useEffect, useRef } from "react";

const useModalClickOutsideHook = (close?: () => void) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !(modalRef.current as HTMLElement).contains(event.target as Node)
      ) {
        if (close) {
          close();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return modalRef;
};

export default useModalClickOutsideHook;
