import React, { useEffect } from "react";

const useClickOutside = (ref, onClickOutside, buttonRef) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef?.current && buttonRef?.current.contains(event.target)) {
        return;
      }
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export default useClickOutside;
