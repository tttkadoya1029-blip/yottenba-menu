import PageHeader from "@/components/PageHeader";
import InfoGallery from "@/components/InfoGallery";
import { getFolderImages } from "@/lib/menu";

export const metadata = {
  title: "Parking | Yotteba Izakaya Makati",
};

export default function ParkingPage() {
  const images = getFolderImages("parking");

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader title="Parking" titleJa="駐車場のご案内" />
      <div className="flex-1 px-4 py-6">
        <InfoGallery
          images={images}
          note="駐車場の詳細情報は近日公開予定です。"
        />
      </div>
    </div>
  );
}
