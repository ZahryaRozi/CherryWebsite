"use client";

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number; //v for velocity
  vy: number; 
  rotation: number;
  spin: number;
  opacity: number;
}

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const mouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // This is crazy and I have no idea what I'm doing. But experimenting makes something good, ig.
    const img = new Image();
    img.src = "/resources/Global/petals.png";
    img.onload = () => { imageRef.current = img; };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawnParticle = (x: number, y: number) => {
      if (Math.random() > 0.3) { 
        particles.current.push({
          x: x,
          y: y,
          size: Math.random() * 15 + 10,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          rotation: Math.random() * 360,
          spin: (Math.random() - 0.5) * 5,
          opacity: 1,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY, active: true };
      spawnParticle(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      mouse.current = { x: touch.clientX, y: touch.clientY, active: true };
      spawnParticle(touch.clientX, touch.clientY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    handleResize();

    const render = () => {
      // Clearing
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        
        // Update physics
        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= 0.01; 
        p.rotation += p.spin;

        // Kill old particles
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
          
          // Draw the petal
          ctx.drawImage(imageRef.current, -p.size/2, -p.size/2, p.size, p.size);
          
          // Tinting it Pink using "source-atop"
          ctx.globalCompositeOperation = "source-atop";
          ctx.fillStyle = "#FF94B4"; 
          ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
          
          ctx.restore();
        }
      }
      requestAnimationFrame(render);
    };

    const animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}