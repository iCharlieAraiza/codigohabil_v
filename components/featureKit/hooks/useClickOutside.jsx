import React, { useEffect } from "react";

const useClickOutside = (ref, onClickOutside, buttonRef) => {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event) {
      if (buttonRef?.current && buttonRef?.current.contains(event.target)) {
        return;
      }
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    // Bind
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export default useClickOutside;
