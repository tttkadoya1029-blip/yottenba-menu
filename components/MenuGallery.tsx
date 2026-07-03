"use client";

import { useState } from "react";
import type { Category } from "@/lib/menu";

export default function MenuGallery({
  categories,
  imagesByCategory,
}: {
  categories: Category[];
  imagesByCategory: Record<string, string[]>;
}) {
  const [active, setActive] = useState("all");

  const availableCategories = categories.filter(
    (c) => (imagesByCategory[c.id] ?? []).length > 0
  );

  const images =
    active === "all"
      ? availableCategories.flatMap((c) => imagesByCategory[c.id] ?? [])
      : imagesByCategory[active] ?? [];

  return (
    <div className="flex flex-1 flex-col">
      <nav className="sticky top-[65px] z-20 flex gap-2 overflow-x-auto border-b border-gold/10 bg-ink px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <TabButton label="All" active={active === "all"} onClick={() => setActive("all")} />
        {availableCategories.map((c) => (
          <TabButton
            key={c.id}
            label={c.label}
            active={active === c.id}
            onClick={() => setActive(c.id)}
          />
        ))}
      </nav>

      <div className="flex-1 px-4 py-6">
        {images.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {images.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt="Menu item"
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl border border-gold/10 object-cover shadow-md shadow-black/30"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-vermillion bg-vermillion text-white"
          : "border-gold/20 text-foreground/70 hover:border-gold/40 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}

function EmptyState() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-2 py-20 text-center text-foreground/60">
      <p className="text-lg font-medium text-gold/80">Coming soon</p>
      <p className="text-sm">近日公開予定です。しばらくお待ちください。</p>
    </div>
  );
}
