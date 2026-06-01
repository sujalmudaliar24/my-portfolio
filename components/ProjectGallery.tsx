"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type ProjectGalleryProps = {
  images: Array<string | StaticImageData>;
  title: string;
  onClose?: () => void; // Optional: renders as fullscreen modal if provided
};

export default function ProjectGallery({ images, title, onClose }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultiple = images.length > 1;
  const isModal = !!onClose;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && onClose) {
        onClose();
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, onClose]);

  // The actual device mockup gallery element
  const galleryContent = (
    <div className="flex flex-col items-center justify-between w-full h-full max-w-4xl mx-auto p-4 select-none">
      {/* Header (Only in modal state) */}
      {isModal && (
        <div className="w-full flex items-center justify-between border-b border-white/10 pb-4 mb-4 text-white">
          <div>
            <h3 className="text-lg font-bold tracking-tight">{title}</h3>
            <p className="text-xs text-slate-400">Media Gallery</p>
          </div>
          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 text-sm font-bold cursor-pointer"
            aria-label="Close Gallery"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Image Viewport Area */}
      <div className="relative flex-1 flex items-center justify-center w-full min-h-[360px] md:min-h-[440px] my-4">
        {/* Previous Image Trigger */}
        {hasMultiple && (
          <button
            onClick={() => setActiveIndex((current) => (current - 1 + images.length) % images.length)}
            className="absolute left-0 z-50 rounded-full bg-black/40 hover:bg-black/60 p-3 text-white border border-white/10 transition backdrop-blur-sm cursor-pointer"
            aria-label="Previous Image"
          >
            ←
          </button>
        )}

        {/* Next Image Trigger */}
        {hasMultiple && (
          <button
            onClick={() => setActiveIndex((current) => (current + 1) % images.length)}
            className="absolute right-0 z-50 rounded-full bg-black/40 hover:bg-black/60 p-3 text-white border border-white/10 transition backdrop-blur-sm cursor-pointer"
            aria-label="Next Image"
          >
            →
          </button>
        )}

        {/* Premium CSS Smartphone Bezel Mockup */}
        <div className="phone-mockup-wrapper transform scale-90 sm:scale-100 transition-transform">
          <div className="phone-mockup-screen">
            {/* Dynamic Island camera notch */}
            <div className="phone-mockup-island flex items-center justify-between px-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-950/40 border border-indigo-900/20" />
              <span className="w-3.5 h-1 bg-zinc-900 rounded-full" />
            </div>

            {/* Glossy reflection cover */}
            <div className="phone-mockup-reflection" />

            {/* Screenshot display */}
            <div className="relative w-full h-full bg-slate-100">
              <Image
                src={images[activeIndex]}
                alt={`${title} mockup screen ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-w-768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Thumbnail Strip */}
      {hasMultiple && (
        <div className="w-full mt-4">
          <div className="flex justify-center gap-2 overflow-x-auto py-2">
            {images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-12 h-16 sm:w-14 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                  idx === activeIndex
                    ? "border-navy ring-2 ring-navy/20 scale-105"
                    : isModal
                    ? "border-white/10 hover:border-white/40"
                    : "border-slate-200 hover:border-slate-400"
                }`}
              >
                <Image
                  src={image}
                  alt={`${title} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="60px"
                />
              </button>
            ))}
          </div>
          {/* Slide Indicator Text */}
          <div className={`text-center text-[10px] font-bold uppercase tracking-widest mt-2 ${isModal ? "text-slate-400" : "text-slate-500"}`}>
            Screenshot {activeIndex + 1} of {images.length}
          </div>
        </div>
      )}
    </div>
  );

  // Conditional output wrapper depending on modal or inline display state
  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center gallery-modal-backdrop p-4 sm:p-6 select-none">
        {/* Click backdrop to close */}
        <div className="absolute inset-0 cursor-default" onClick={onClose} />
        
        {/* Modal Window Container */}
        <div className="relative z-10 w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900/90 shadow-2xl p-4 sm:p-6 overflow-hidden">
          {galleryContent}
        </div>
      </div>
    );
  }

  // Inline fallback (e.g. details page display)
  return (
    <div className="w-full bg-[#fdfdfb]">
      {galleryContent}
    </div>
  );
}
