import { useEffect, useRef } from "react";

function Cursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!dotRef.current) return;

      dotRef.current.style.left = `${e.clientX}px`;
      dotRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="cursor-dot" ref={dotRef}></div>;
}

export default Cursor;
