
import { useRef, useEffect } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = "",
  speed = 0.1,
  direction = "up",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const section = sectionRef.current;
    const content = contentRef.current;
    
    // Calculate parallax values
    let startPos = 0;
    let ticking = false;
    let animationFrameId: number | null = null;

    const calculateParallax = () => {
      if (!section || !content) return;
      
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is visible
      if (rect.bottom < 0 || rect.top > windowHeight) return;
      
      // Calculate how far the section is from the center of the viewport
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = sectionCenter - viewportCenter;
      
      // Apply transform based on distance from center and speed
      const factor = direction === "up" ? -1 : 1;
      const transform = distanceFromCenter * speed * factor;
      
      content.style.transform = `translate3d(0, ${transform}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        animationFrameId = window.requestAnimationFrame(() => {
          calculateParallax();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", calculateParallax);
    
    // Initial calculation
    calculateParallax();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", calculateParallax);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [speed, direction]);

  return (
    <div ref={sectionRef} className={`parallax-section ${className}`}>
      <div ref={contentRef} className="parallax-content">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
