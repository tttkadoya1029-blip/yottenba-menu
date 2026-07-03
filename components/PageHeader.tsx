import Image from "next/image";
import Link from "next/link";

const navItems = [
  { id: "food", href: "/food", label: "Food Menu" },
  { id: "drink", href: "/drink", label: "Drink Menu" },
] as const;

export default function PageHeader({ active }: { active: "food" | "drink" }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-center gap-3 border-b border-gold/20 bg-ink/95 px-4 py-3 backdrop-blur">
      <Image
        src="/brand/logo.webp"
        alt="酔っ手羽 Yotteba Izakaya Revolution"
        width={36}
        height={36}
        className="shrink-0 rounded-full"
        priority
      />
      <nav className="flex items-center gap-2">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`rounded-full px-5 py-2 text-sm font-bold tracking-wide transition-colors ${
              active === item.id
                ? "bg-vermillion text-white"
                : "text-foreground/60 hover:text-gold"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
