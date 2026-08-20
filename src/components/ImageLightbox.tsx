import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Download, X } from "lucide-react";

export interface LightboxImage {
  title: string;
  fileName: string;
  src: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  activeIndex: number;
  onClose: () => void;
  onSelect: (index: number) => void;
}

const ImageLightbox = ({
  images,
  activeIndex,
  onClose,
  onSelect,
}: ImageLightboxProps) => {
  const activeImage = images[activeIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft" && activeIndex > 0) {
        onSelect(activeIndex - 1);
      }

      if (event.key === "ArrowRight" && activeIndex < images.length - 1) {
        onSelect(activeIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length, onClose, onSelect]);

  if (!activeImage) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={activeImage.title}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl border border-border bg-background shadow-card"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
          <h3 className="text-lg font-semibold">{activeImage.title}</h3>
          <div className="flex items-center gap-2">
            <a
              href={activeImage.src}
              download={activeImage.fileName}
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground hover:bg-muted/60"
            >
              <Download className="h-4 w-4" />
              Download
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-muted-foreground hover:bg-muted/60"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => onSelect(activeIndex - 1)}
            disabled={activeIndex <= 0}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-muted-foreground hover:bg-muted/60 disabled:opacity-40"
            aria-label="Previous image"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.title}
            className="max-h-[75vh] w-full object-contain"
          />
          <button
            type="button"
            onClick={() => onSelect(activeIndex + 1)}
            disabled={activeIndex >= images.length - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-muted-foreground hover:bg-muted/60 disabled:opacity-40"
            aria-label="Next image"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
