"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface LightboxImage {
  src: string;
  alt: string;
}

function Lightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: LightboxImage[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors p-2"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
        {activeIndex + 1} / {images.length}
      </div>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 z-10 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
      >
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative w-[85vw] h-[80vh] sm:w-[70vw] sm:h-[85vh] max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          fill
          className="object-contain"
          sizes="85vw"
          priority
        />
      </div>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 z-10 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
      >
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>,
    document.body
  );
}

export function ImageGallery({ images }: { images: LightboxImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i !== null ? (i - 1 + images.length) % images.length : null
      ),
    [images.length]
  );
  const next = useCallback(
    () =>
      setActiveIndex((i) =>
        i !== null ? (i + 1) % images.length : null
      ),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, close, prev, next]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox — portaled to body */}
      {mounted && activeIndex !== null && (
        <Lightbox
          images={images}
          activeIndex={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
