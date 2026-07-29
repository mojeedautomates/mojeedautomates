import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ResponsiveImage } from "./ResponsiveImage";

type Props = {
  images: { url: string; caption?: string }[];
  index: number;
  onClose: () => void;
  onNav: (i: number) => void;
};

export function Lightbox({ images, index, onClose, onNav }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const prevFocusRef = useRef<Element | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    prevFocusRef.current = document.activeElement;
    // Focus close button on open
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowRight") onNav((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNav((index - 1 + images.length) % images.length);

      // Focus trap
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      // Restore focus
      if (prevFocusRef.current instanceof HTMLElement) {
        prevFocusRef.current.focus();
      }
    };
  }, [index, images.length, onClose, onNav]);

  const img = images[index];
  if (!img) return null;

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        ref={closeBtnRef}
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close image viewer"
        className="absolute top-4 right-4 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/60"
      >
        <X size={20} />
      </button>
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onNav((index - 1 + images.length) % images.length); }}
            aria-label="Previous image"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNav((index + 1) % images.length); }}
            aria-label="Next image"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}
      <figure className="max-w-6xl w-full max-h-full flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
        <ResponsiveImage
          src={img.url}
          alt={img.caption ?? "Screenshot"}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
        />
        {img.caption && (
          <figcaption className="text-sm text-white/80 text-center px-4">
            {img.caption} {images.length > 1 && <span className="text-white/50">— {index + 1} / {images.length}</span>}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
