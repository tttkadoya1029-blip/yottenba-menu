import PageHeader from "@/components/PageHeader";
import { getFolderImages } from "@/lib/menu";

export const metadata = {
  title: "Drink Menu | 酔っ手羽 Yotteba Izakaya Revolution",
};

export default function DrinkMenuPage() {
  const images = getFolderImages("drink");

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader active="drink" />
      <div className="flex-1 px-4 py-6">
        {images.length === 0 ? (
          <div className="mx-auto flex max-w-md flex-col items-center gap-2 py-20 text-center text-foreground/60">
            <p className="text-lg font-medium text-gold/80">Coming soon</p>
            <p className="text-sm">近日公開予定です。しばらくお待ちください。</p>
          </div>
        ) : (
          <div className="mx-auto flex max-w-md flex-col gap-4">
            {images.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt="Drink menu"
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl border border-gold/10 shadow-md shadow-black/30"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
