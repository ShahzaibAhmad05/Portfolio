/**
 * Math utility functions
 */

/**
 * Clamp a number between min and max values
 * @param n - The number to clamp
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns The clamped value
 */
export function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}
