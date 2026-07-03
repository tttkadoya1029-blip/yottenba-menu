import Link from "next/link";

const menuButtons = [
  { href: "/food", label: "FOOD MENU", ja: "フードメニュー" },
  { href: "/drink", label: "DRINK MENU", ja: "ドリンクメニュー" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 pb-10 pt-14">
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold/70">
          Izakaya
        </span>
        <h1 className="mt-2 text-4xl font-extrabold tracking-wide text-gold">
          酔っ手羽
        </h1>
        <p className="mt-1 text-sm tracking-wide text-foreground/70">
          Yotteba Izakaya Revolution
        </p>
      </div>

      <div className="grid w-full max-w-md grid-cols-1 gap-4">
        {menuButtons.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center justify-between rounded-xl border border-gold/20 bg-ink-soft px-6 py-5 transition-colors hover:border-vermillion"
          >
            <span>
              <span className="block text-lg font-bold tracking-wide text-foreground group-hover:text-gold">
                {item.label}
              </span>
              <span className="block text-xs text-foreground/50">{item.ja}</span>
            </span>
            <span className="text-gold/60 transition-transform group-hover:translate-x-1 group-hover:text-vermillion">
              →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
