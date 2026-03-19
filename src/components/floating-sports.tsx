"use client";

import { useEffect, useState } from "react";

const sportsIcons = [
  // Baseball
  (cls: string) => (
    <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.3 3.8c1.5 2.2 2.2 5 2 7.8-.2 2.8-1.2 5.5-3 7.7" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M17.7 3.8c-1.5 2.2-2.2 5-2 7.8.2 2.8 1.2 5.5 3 7.7" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  // Football
  (cls: string) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="9" ry="5" transform="rotate(-45 12 12)" />
      <path d="M15.5 8.5l-7 7" strokeLinecap="round" />
      <path d="M12 9.5l-2.5 2.5M14.5 12L12 14.5" strokeLinecap="round" />
    </svg>
  ),
  // Basketball
  (cls: string) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2v20" />
      <path d="M5.6 5.6c3.5 2.5 3.5 10.3 0 12.8" />
      <path d="M18.4 5.6c-3.5 2.5-3.5 10.3 0 12.8" />
    </svg>
  ),
  // Trophy
  (cls: string) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 7H4a1 1 0 00-1 1v1a3 3 0 003 3h1M17 7h3a1 1 0 011 1v1a3 3 0 01-3 3h-1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Medal/Star
  (cls: string) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Jersey/Shirt
  (cls: string) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6.5 2L2 6l3 2v12h14V8l3-2-4.5-4-3 3h-5l-3-3z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
];

interface FloatingIcon {
  id: number;
  iconIndex: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  rotation: number;
}

function generateSpacedIcons(count: number, sizeMin: number, sizeMax: number, opacityMin: number, opacityMax: number): FloatingIcon[] {
  const icons: FloatingIcon[] = [];
  // Divide the area into a grid to prevent overlap
  const cols = Math.ceil(Math.sqrt(count * 2));
  const rows = Math.ceil(count / cols);
  const cellW = 100 / cols;
  const cellH = 100 / rows;

  for (let i = 0; i < count; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    // Place within cell with some randomness but stay inside the cell
    const x = col * cellW + Math.random() * cellW * 0.6 + cellW * 0.2;
    const y = row * cellH + Math.random() * cellH * 0.6 + cellH * 0.2;

    icons.push({
      id: i,
      iconIndex: Math.floor(Math.random() * sportsIcons.length),
      x: Math.min(x, 95),
      y: Math.min(y, 95),
      size: sizeMin + Math.random() * (sizeMax - sizeMin),
      duration: 15 + Math.random() * 20,
      delay: Math.random() * -20,
      opacity: opacityMin + Math.random() * (opacityMax - opacityMin),
      rotation: Math.random() * 360,
    });
  }
  return icons;
}

export function FloatingSportsIcons({ count = 12, className = "" }: { count?: number; className?: string }) {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    setIcons(generateSpacedIcons(count, 16, 32, 0.04, 0.08));
  }, [count]);

  if (icons.length === 0) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {icons.map((icon) => {
        const IconComponent = sportsIcons[icon.iconIndex];
        return (
          <div
            key={icon.id}
            className="absolute animate-float text-foreground"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              width: icon.size,
              height: icon.size,
              opacity: icon.opacity,
              transform: `rotate(${icon.rotation}deg)`,
              animationDuration: `${icon.duration}s`,
              animationDelay: `${icon.delay}s`,
            }}
          >
            {IconComponent(`w-full h-full`)}
          </div>
        );
      })}
    </div>
  );
}

export function FloatingSportsIconsLight({ count = 10, className = "" }: { count?: number; className?: string }) {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    setIcons(generateSpacedIcons(count, 20, 36, 0.05, 0.1));
  }, [count]);

  if (icons.length === 0) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {icons.map((icon) => {
        const IconComponent = sportsIcons[icon.iconIndex];
        return (
          <div
            key={icon.id}
            className="absolute animate-float text-white"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              width: icon.size,
              height: icon.size,
              opacity: icon.opacity,
              transform: `rotate(${icon.rotation}deg)`,
              animationDuration: `${icon.duration}s`,
              animationDelay: `${icon.delay}s`,
            }}
          >
            {IconComponent(`w-full h-full`)}
          </div>
        );
      })}
    </div>
  );
}
