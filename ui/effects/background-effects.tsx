/**
 * Animated background effects with fog/smoke gradients
 * Visibility controlled by parent component based on active slide
 */

"use client";

interface BackgroundEffectsProps {
  scrollProgress: number;
  isVisible: boolean;
}

export default function BackgroundEffects({ scrollProgress, isVisible }: BackgroundEffectsProps) {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-700"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Deep Navy - Background Layer */}
      <div 
        className="absolute w-150 h-150 opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.5) 0%, rgba(29, 78, 216, 0.3) 30%, transparent 65%)',
          filter: 'blur(120px)',
          left: `${-200 + scrollProgress * 50}px`,
          top: '10vh',
          animation: 'smokeFloat1 45s ease-in-out infinite',
        }}
      />
      
      {/* Sky Blue - Bright Accent */}
      <div 
        className="absolute w-125 h-125 opacity-45"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.5) 0%, rgba(14, 165, 233, 0.3) 35%, transparent 70%)',
          filter: 'blur(100px)',
          right: `${-150 + scrollProgress * 40}px`,
          top: '5vh',
          animation: 'smokeFloat2 50s ease-in-out infinite',
        }}
      />
      
      {/* Royal Blue - Mid Layer */}
      <div 
        className="absolute w-137.5 h-137.5 opacity-38"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.45) 0%, rgba(37, 99, 235, 0.25) 35%, transparent 68%)',
          filter: 'blur(110px)',
          left: `${30 + scrollProgress * 35}vw`,
          bottom: '15vh',
          animation: 'smokeFloat3 55s ease-in-out infinite',
        }}
      />
      
      {/* Cyan Blue - Corner Accent */}
      <div 
        className="absolute w-112.5 h-112.5 opacity-42"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(125, 211, 252, 0.48) 0%, rgba(56, 189, 248, 0.28) 38%, transparent 70%)',
          filter: 'blur(95px)',
          left: `${-180 + scrollProgress * 45}px`,
          bottom: '8vh',
          animation: 'smokeFloat4 48s ease-in-out infinite',
        }}
      />
      
      {/* Azure - Floating Center */}
      <div 
        className="absolute w-120 h-120 opacity-35"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.4) 0%, rgba(59, 130, 246, 0.22) 40%, transparent 68%)',
          filter: 'blur(105px)',
          left: `${40 + scrollProgress * 30}vw`,
          top: '25vh',
          animation: 'smokeFloat5 52s ease-in-out infinite',
        }}
      />
      
      {/* Indigo - Deep Accent */}
      <div 
        className="absolute w-130 h-130 opacity-36"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(67, 56, 202, 0.42) 0%, rgba(99, 102, 241, 0.24) 36%, transparent 70%)',
          filter: 'blur(115px)',
          right: `${-160 + scrollProgress * 38}px`,
          bottom: '12vh',
          animation: 'smokeFloat6 58s ease-in-out infinite',
        }}
      />
    </div>
  );
}
