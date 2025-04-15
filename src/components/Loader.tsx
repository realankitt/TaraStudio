
import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduce timeout duration for faster loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('loaded');
    }, 800);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loaded');
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 relative">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-brand/20 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-brand rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-neutral-600 animate-pulse">Loading experience</p>
      </div>
    </div>
  );
};

export default Loader;