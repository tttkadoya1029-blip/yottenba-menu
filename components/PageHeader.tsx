import Link from "next/link";

export default function PageHeader({
  title,
  titleJa,
}: {
  title: string;
  titleJa?: string;
}) {
  return (
    <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-gold/20 bg-ink/95 px-4 py-4 backdrop-blur">
      <Link
        href="/"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-ink-soft"
        aria-label="Back to top"
      >
        ←
      </Link>
      <div>
        <h1 className="text-lg font-bold tracking-wide text-gold">{title}</h1>
        {titleJa && <p className="text-xs text-foreground/60">{titleJa}</p>}
      </div>
    </header>
  );
}
