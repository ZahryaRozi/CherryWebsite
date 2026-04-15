"use client";

import React, { useEffect, useState } from 'react';

const Petal = ({ src, size, left, top, delay, duration }: any) => (
  <img
    src={src}
    alt=""
    className="fixed pointer-events-none z-[-1] opacity-30 animate-fall-drift" 
    style={{
      width: size,
      left: left,
      top: top,
      animationDelay: delay,
      animationDuration: duration,
      filter: 'invert(84%) sepia(13%) saturate(3059%) hue-rotate(299deg) brightness(101%) contrast(101%)',
    }}
  />
);
export default function FallingPetals() {
  const [petals, setPetals] = useState<any[]>([]);
  const petalImages = [
    '/resources/Global/cherry-blossom.png',
    '/resources/Global/petals.png',
    '/resources/Global/sakura-festival.png',
    '/resources/Global/sakura.png',
    '/resources/Global/sakura-branch.png'
  ];

  useEffect(() => {
    const newPetals = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      src: petalImages[Math.floor(Math.random() * petalImages.length)],
      size: `${Math.random() * 15 + 15}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100 - 20}%`,
      delay: `${Math.random() * -20}s`,
      duration: `${Math.random() * 10 + 15}s`, 
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {petals.map((p) => (
        <Petal key={p.id} {...p} />
      ))}
    </div>
  );
}