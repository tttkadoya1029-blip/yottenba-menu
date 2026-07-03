import PageHeader from "@/components/PageHeader";
import InfoGallery from "@/components/InfoGallery";
import { getFolderImages } from "@/lib/menu";

export const metadata = {
  title: "Promo | Yotteba Izakaya Makati",
};

export default function PromoPage() {
  const images = getFolderImages("promo");

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader title="Promo" titleJa="プロモーション" />
      <div className="flex-1 px-4 py-6">
        <InfoGallery
          images={images}
          note="最新のプロモーション情報は近日公開予定です。"
        />
      </div>
    </div>
  );
}
