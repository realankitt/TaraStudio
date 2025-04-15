
import { useEffect, useState } from "react";

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over links or buttons
      const target = e.target as HTMLElement;
      const isLink = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button');
      
      setLinkHovered(!!isLink);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    // Only run on desktop devices
    if (typeof window !== 'undefined' && window.matchMedia("(pointer: fine)").matches) {
      addEventListeners();
      return () => removeEventListeners();
    }
  }, []);

  // Don't render on mobile/touch devices
  if (typeof window !== 'undefined' && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <div
      className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 will-change-transform ${
        hidden ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div
        className={`rounded-full bg-white transition-all duration-200 ${
          clicked ? 'w-5 h-5 opacity-70' : linkHovered ? 'w-10 h-10 opacity-80' : 'w-6 h-6 opacity-100'
        }`}
      ></div>
    </div>
  );
};

export default CursorEffect;
