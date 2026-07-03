export default function InfoGallery({
  images,
  note,
}: {
  images: string[];
  note: string;
}) {
  if (images.length === 0) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-2 py-20 text-center text-foreground/60">
        <p className="text-lg font-medium text-gold/80">Coming soon</p>
        <p className="text-sm">{note}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
      {images.map((src) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt="Info"
          loading="lazy"
          decoding="async"
          className="w-full rounded-xl border border-gold/10 object-cover shadow-md shadow-black/30"
        />
      ))}
    </div>
  );
}
