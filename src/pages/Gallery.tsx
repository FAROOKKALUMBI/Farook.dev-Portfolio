import { useState } from "react";
import ImageLightbox, { type LightboxImage } from "@/components/ImageLightbox";

const Gallery = () => {
  const imageUrl = (fileName: string) => encodeURI(`/gallery/${fileName}`);

  const baseImages = Array.from({ length: 13 }, (_, index) => {
    const number = index + 1;
    return {
      title: `Photo ${number}`,
      fileName: `${number}.jpeg`,
    };
  });

  const extraImages = [
    // Add more images here, one at a time.
    // { title: "Extra Photo", fileName: "extra-photo.png" },
    {title: "Photography Duties", fileName: "gronz.jpg"}
  ];

  const hiddenFiles = new Set(["5.jpeg", "7.jpeg"]);

  const images = [...baseImages, ...extraImages].filter(
    (image) => !hiddenFiles.has(image.fileName)
  ).map((image) => ({
    ...image,
    src: imageUrl(image.fileName),
  })) satisfies LightboxImage[];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_55%)]" />
      <div className="relative z-10 px-6 pb-20 pt-28 sm:px-10 lg:px-16">
         <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            My Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of images of me and other photography work I have done
          </p>
        </div>

        <section className="max-w-6xl mx-auto mt-12 [column-count:1] sm:[column-count:2] lg:[column-count:3] [column-gap:1.5rem]">
          {images.map((image, index) => (
            <button
              key={image.fileName}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="mb-6 w-full break-inside-avoid rounded-2xl border border-border bg-card/70 p-3 text-left shadow-card"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 text-base font-semibold">{image.title}</h3>
            </button>
          ))}
        </section>
      </div>

      {activeIndex !== null && (
        <ImageLightbox
          images={images}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onSelect={setActiveIndex}
        />
      )}
    </div>
  );
};

export default Gallery;
