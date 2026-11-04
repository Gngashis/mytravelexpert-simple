'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle definition
    const PARTICLE_COUNT = 90;
    const particles: {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      targetOpacity: number;
      golden: boolean;
      depth: number;
    }[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.6,
        speedY: -(Math.random() * 0.45 + 0.15),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        targetOpacity: Math.random() * 0.7 + 0.2,
        golden: Math.random() > 0.65, // 35% golden particles, 65% alpine snow mist
        depth: Math.random() * 0.6 + 0.4, // parallax depth layer
      });
    }

    // Dynamic cursor coordinates with hand-tuned exponential damping matrix
    // L(t) = a + (b - a) * (1 - e^(-k * dt)) for zero-latency 60FPS fluid mouse response
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    const SMOOTHING = 0.05;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to [-1, 1]
      targetMouseX = (e.clientX / width - 0.5) * 2;
      targetMouseY = (e.clientY / height - 0.5) * 2;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    const render = () => {
      // Exponential smoothing interpolation: L(t) = a + (b - a) * factor
      currentMouseX += (targetMouseX - currentMouseX) * SMOOTHING;
      currentMouseY += (targetMouseY - currentMouseY) * SMOOTHING;

      ctx.clearRect(0, 0, width, height);

      // Render floating snow & Tibetan gold particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply mouse parallax offset based on particle depth
        const parallaxOffsetX = currentMouseX * 35 * p.depth;
        const parallaxOffsetY = currentMouseY * 25 * p.depth;

        p.y += p.speedY;
        p.x += p.speedX;

        // Wrap around borders
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Gentle pulsing opacity
        p.opacity += (p.targetOpacity - p.opacity) * 0.02;
        if (Math.abs(p.targetOpacity - p.opacity) < 0.05) {
          p.targetOpacity = Math.random() * 0.7 + 0.2;
        }

        ctx.beginPath();
        const renderX = p.x + parallaxOffsetX;
        const renderY = p.y + parallaxOffsetY;

        ctx.arc(renderX, renderY, p.size, 0, Math.PI * 2);

        if (p.golden) {
          ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity * 0.85})`;
          ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
          ctx.shadowBlur = p.size * 3;
        } else {
          ctx.fillStyle = `rgba(248, 250, 252, ${p.opacity * 0.6})`;
          ctx.shadowColor = 'rgba(255, 255, 255, 0.3)';
          ctx.shadowBlur = p.size * 2;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
