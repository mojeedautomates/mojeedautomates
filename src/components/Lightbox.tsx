import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: { url: string; caption?: string }[];
  index: number;
  onClose: () => void;
  onNav: (i: number) => void;
};

export function Lightbox({ images, index, onClose, onNav }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNav((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onNav]);

  const img = images[index];
  if (!img) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X size={20} />
      </button>
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onNav((index - 1 + images.length) % images.length); }}
            aria-label="Previous"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNav((index + 1) % images.length); }}
            aria-label="Next"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}
      <figure className="max-w-6xl w-full max-h-full flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
        <img
          src={img.url}
          alt={img.caption ?? "Screenshot"}
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
