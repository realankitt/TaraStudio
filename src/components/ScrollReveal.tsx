import React, { useRef, useEffect, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: string;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  direction = "up",
  distance = "20px",
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold,
    };

    let startingStyles: React.CSSProperties = {
      opacity: 0,
      transform: `translate${direction === "left" || direction === "right" ? "X" : "Y"}(${
        direction === "down" || direction === "right" ? "-" : ""
      }${distance})`,
      transition: `opacity 0.4s ease, transform 0.4s ease`, // Reduced duration
      transitionDelay: `${delay}ms`,
      willChange: "opacity, transform"
    };

    // Apply initial styles
    Object.assign(currentRef.style, startingStyles);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          const visibleStyles: React.CSSProperties = {
            opacity: 1,
            transform: "translate(0, 0)",
          };
          
          Object.assign(currentRef.style, visibleStyles);
          
          if (once && observer) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(false);
          Object.assign(currentRef.style, startingStyles);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, delay, direction, distance, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
