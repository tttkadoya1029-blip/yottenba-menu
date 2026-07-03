import { MESSENGER_URL } from "@/lib/menu";

export default function ReserveButton() {
  return (
    <div className="sticky bottom-0 z-40 border-t border-gold/20 bg-ink/95 px-4 py-3 backdrop-blur">
      <a
        href={MESSENGER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto flex max-w-md items-center justify-center gap-2 rounded-full bg-vermillion px-6 py-3 text-center text-sm font-semibold tracking-wide text-white shadow-lg shadow-black/30 transition-colors hover:bg-vermillion-dark"
      >
        Reserve Now / ご予約はこちら
      </a>
    </div>
  );
}
