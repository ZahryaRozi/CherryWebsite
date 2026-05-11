"use client";

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  rotation: number;
  spin: number;
  opacity: number;
}

export default function MusicAura({ 
  isActive, 
  containerRef, 
  color 
}: { 
  isActive: boolean; 
  containerRef: React.RefObject<HTMLDivElement | null>;
  color: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = "/resources/Global/petals.png";
    img.onload = () => { imageRef.current = img; };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const spawnParticle = () => {
      if (!containerRef.current || !isActive) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      const side = Math.floor(Math.random() * 4);
      let x = 0, y = 0, vx = 0, vy = 0;

      if (side === 0) { // Top
        x = rect.left + Math.random() * rect.width;
        y = rect.top;
        vy = -Math.random() * 0.8; 
      } else if (side === 1) { // Bottom
        x = rect.left + Math.random() * rect.width;
        y = rect.bottom;
        vy = Math.random() * 0.8;
      } else if (side === 2) { // Left
        x = rect.left;
        y = rect.top + Math.random() * rect.height;
        vx = -Math.random() * 0.8;
      } else { // Right
        x = rect.right;
        y = rect.top + Math.random() * rect.height;
        vx = Math.random() * 0.8;
      }

      particles.current.push({
        x, y,
        size: Math.random() * 12 + 6,
        vx: vx + (Math.random() - 0.5) * 0.3,
        vy: vy + (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * 360,
        spin: (Math.random() - 0.5) * 2,
        opacity: 0.7,
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (isActive && Math.random() > 0.85) spawnParticle();

      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= 0.004;
        p.rotation += p.spin;

        if (p.opacity <= 0) {
          particles.current.splice(i, 1);
          i--;
          continue;
        }

        if (imageRef.current) {
          ctx.save();
          ctx.globalAlpha = p.opacity;
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.drawImage(imageRef.current, -p.size/2, -p.size/2, p.size, p.size);
          
          ctx.globalCompositeOperation = "source-atop";
          ctx.fillStyle = color; // Dynamic Song Color
          ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
          ctx.restore();
        }
      }
      requestAnimationFrame(render);
    };

    const animId = requestAnimationFrame(render);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [isActive, containerRef, color]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}