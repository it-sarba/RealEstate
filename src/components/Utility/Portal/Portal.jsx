import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children, container = document.body }) => {
  const [mounted, setMounted] = useState(false);
  const elRef = useRef(null);

  // Create a div if not already available
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const el = elRef.current;
    container.appendChild(el);
    setMounted(true);

    return () => {
      container.removeChild(el);
    };
  }, [container]);

  return mounted ? createPortal(children, elRef.current) : null;
};
