/**
 * Smooth scroll utility for enhancing the scrolling experience
 * @param targetId - ID of the element to scroll to (without #)
 * @param duration - Duration of the scroll animation in milliseconds
 */
export const smoothScrollTo = (targetId: string, duration = 1000): void => {
  const target = document.getElementById(targetId);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    
    window.scrollTo(0, startPosition + distance * ease);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  // Easing function for smooth acceleration and deceleration
  function easeInOutCubic(t: number): number {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  requestAnimationFrame(animation);
};

/**
 * Initialize smooth scrolling for all anchor links
 */
export const initSmoothScrolling = (): void => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    
    if (!anchor) return;
    
    const href = anchor.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    
    const targetId = href.substring(1);
    if (!targetId) return;
    
    e.preventDefault();
    smoothScrollTo(targetId);
  });
};

html {
  scroll-behavior: smooth;
}
