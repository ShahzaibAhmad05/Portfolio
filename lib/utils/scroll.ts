/**
 * Scroll utility functions
 */

/**
 * Easing function for smooth animations
 * @param t - Progress value between 0 and 1
 * @returns Eased progress value
 */
export function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/**
 * Smoothly scroll an element to a target position
 * @param element - The element to scroll
 * @param target - Target scroll position
 * @param duration - Animation duration in milliseconds
 * @param animationFrameRef - Reference to store animation frame ID
 */
export function smoothScrollTo(
  element: HTMLElement,
  target: number,
  duration: number,
  animationFrameRef: React.MutableRefObject<number | null>
): void {
  const start = element.scrollLeft;
  const distance = target - start;
  const startTime = performance.now();

  // Temporarily disable snap scrolling during animation
  element.style.scrollSnapType = 'none';

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutExpo(progress);
    
    element.scrollLeft = start + distance * easedProgress;

    if (progress < 1) {
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      animationFrameRef.current = null;
      // Re-enable snap scrolling after animation completes
      element.style.scrollSnapType = '';
    }
  };

  if (animationFrameRef.current !== null) {
    cancelAnimationFrame(animationFrameRef.current);
  }
  
  animationFrameRef.current = requestAnimationFrame(animate);
}
