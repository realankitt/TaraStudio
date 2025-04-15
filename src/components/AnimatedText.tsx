
import { useRef, useEffect } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  wordClass?: string; 
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

const AnimatedText = ({
  text,
  className = "",
  wordClass = "",
  once = true,
  as: Component = "p"
}: AnimatedTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const textElements = containerRef.current?.querySelectorAll(".reveal-text");
          textElements?.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add("animated-text");
            }, index * 50);
          });
          
          if (once && observer) {
            observer.disconnect();
          }
        } else if (!once) {
          const textElements = containerRef.current?.querySelectorAll(".reveal-text");
          textElements?.forEach(element => {
            element.classList.remove("animated-text");
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [once]);

  // Split the text into words
  const words = text.split(" ");

  return (
    <div ref={containerRef} className={className}>
      <Component className="inline">
        {words.map((word, index) => (
          <span key={index} className={`${wordClass} reveal-container inline-block mr-[0.25em]`}>
            <span className="reveal-text block">
              {word}
            </span>
          </span>
        ))}
      </Component>
    </div>
  );
};

export default AnimatedText;
