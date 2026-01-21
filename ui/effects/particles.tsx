/**
 * Animated particle/constellation effect
 * Creates twinkling stars with connecting lines and mouse interaction
 */

"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface ParticlesProps {
  theme?: 'amber' | 'teal' | 'violet';
}

export default function Particles({ theme = 'amber' }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationFrameRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const scrollOffsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Track scroll position
    const handleScroll = () => {
      const scrollContainer = document.querySelector('[data-scroller]') as HTMLElement;
      if (scrollContainer) {
        scrollOffsetRef.current = {
          x: scrollContainer.scrollLeft * 0.3, // Parallax effect (30% of scroll)
          y: scrollContainer.scrollTop * 0.3,
        };
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      // Spawn particles across 5 screen widths for infinite scroll effect
      const totalWidth = canvas.width * 5;
      const particleCount = Math.floor((totalWidth * canvas.height) / 25000);
      
      for (let i = 0; i < particleCount; i++) {
        const xPos = Math.random() * totalWidth;
        // Decrease density based on x position (every screen to the right has fewer particles)
        const screenIndex = Math.floor(xPos / canvas.width);
        const densityFactor = Math.max(0.3, 1 - screenIndex * 0.15);
        
        if (Math.random() < densityFactor) {
          particlesRef.current.push({
            x: xPos,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5 + 0.3,
            speedX: (Math.random() - 0.5) * 0.15,
            speedY: (Math.random() - 0.5) * 0.15,
            opacity: Math.random() * 0.5 + 0.15,
            pulseSpeed: Math.random() * 0.015 + 0.005,
            pulsePhase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Color themes
    const getThemeColors = () => {
      switch (theme) {
        case 'amber':
          return {
            core: (opacity: number) => `rgba(255, 245, 230, ${opacity})`,
            glow1: (opacity: number) => `rgba(255, 220, 180, ${opacity * 0.6})`,
            glow2: (opacity: number) => `rgba(220, 180, 140, ${opacity * 0.3})`,
            line: (opacity: number) => `rgba(200, 170, 130, ${opacity})`,
          };
        case 'teal':
          return {
            core: (opacity: number) => `rgba(230, 255, 250, ${opacity})`,
            glow1: (opacity: number) => `rgba(150, 230, 220, ${opacity * 0.6})`,
            glow2: (opacity: number) => `rgba(120, 200, 190, ${opacity * 0.3})`,
            line: (opacity: number) => `rgba(130, 180, 175, ${opacity})`,
          };
        case 'violet':
          return {
            core: (opacity: number) => `rgba(245, 240, 255, ${opacity})`,
            glow1: (opacity: number) => `rgba(200, 180, 230, ${opacity * 0.6})`,
            glow2: (opacity: number) => `rgba(170, 150, 200, ${opacity * 0.3})`,
            line: (opacity: number) => `rgba(160, 140, 180, ${opacity})`,
          };
      }
    };

    const colors = getThemeColors();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      timeRef.current += 0.016;
      
      // Save context and apply scroll offset
      ctx.save();
      ctx.translate(-scrollOffsetRef.current.x, -scrollOffsetRef.current.y);
      
      // Draw constellation lines first (behind stars)
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 120;

          if (distance < maxDistance) {
            const lineOpacity = (1 - distance / maxDistance) * 0.3;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = colors.line(lineOpacity);
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw stars
      particlesRef.current.forEach((particle) => {
        // Gentle drift
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges with infinite horizontal scrolling
        const totalWidth = canvas.width * 5;
        
        if (particle.x < -10) particle.x = totalWidth + 10;
        if (particle.x > totalWidth + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Twinkling effect (like real stars)
        const pulse = Math.sin(timeRef.current * particle.pulseSpeed + particle.pulsePhase) * 0.5 + 0.5;
        const currentOpacity = particle.opacity * (0.4 + pulse * 0.6);

        // Mouse interaction - brighten nearby stars (adjust for scroll)
        const adjustedMouseX = mouseRef.current.x + scrollOffsetRef.current.x;
        const adjustedMouseY = mouseRef.current.y + scrollOffsetRef.current.y;
        const dx = adjustedMouseX - particle.x;
        const dy = adjustedMouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const glowRadius = 150;
        let glowBoost = 0;
        
        if (distance < glowRadius) {
          glowBoost = (1 - distance / glowRadius) * 0.5;
        }

        // Draw star with glow
        const finalOpacity = Math.min(currentOpacity + glowBoost, 0.9);
        
        // Bright star core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = colors.core(finalOpacity);
        ctx.fill();
        
        // Star glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        gradient.addColorStop(0, colors.glow1(finalOpacity));
        gradient.addColorStop(0.5, colors.glow2(finalOpacity));
        gradient.addColorStop(1, `rgba(161, 161, 170, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Restore context
      ctx.restore();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    
    // Find and attach scroll listener to the scroller element
    const scrollContainer = document.querySelector('[data-scroller]') as HTMLElement;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    }
    
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
