"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Animation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "blur-in";

const animationStyles: Record<Animation, { from: string; to: string }> = {
  "fade-up": {
    from: "opacity-0 translate-y-10",
    to: "opacity-100 translate-y-0",
  },
  "fade-down": {
    from: "opacity-0 -translate-y-10",
    to: "opacity-100 translate-y-0",
  },
  "fade-left": {
    from: "opacity-0 translate-x-10",
    to: "opacity-100 translate-x-0",
  },
  "fade-right": {
    from: "opacity-0 -translate-x-10",
    to: "opacity-100 translate-x-0",
  },
  "zoom-in": {
    from: "opacity-0 scale-90",
    to: "opacity-100 scale-100",
  },
  "zoom-out": {
    from: "opacity-0 scale-110",
    to: "opacity-100 scale-100",
  },
  "flip-up": {
    from: "opacity-0 rotate-x-12",
    to: "opacity-100 rotate-x-0",
  },
  "blur-in": {
    from: "opacity-0 blur-sm",
    to: "opacity-100 blur-0",
  },
};

export function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  once = true,
}: {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once]);

  const styles = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? styles.to : styles.from} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function StaggerChildren({
  children,
  animation = "fade-up",
  staggerDelay = 100,
  duration = 700,
  className = "",
}: {
  children: ReactNode[];
  animation?: Animation;
  staggerDelay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <>
      {children.map((child, i) => (
        <AnimateOnScroll
          key={i}
          animation={animation}
          delay={i * staggerDelay}
          duration={duration}
          className={className}
        >
          {child}
        </AnimateOnScroll>
      ))}
    </>
  );
}
