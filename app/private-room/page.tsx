import PageHeader from "@/components/PageHeader";
import InfoGallery from "@/components/InfoGallery";
import { getFolderImages } from "@/lib/menu";

export const metadata = {
  title: "Private Room | Yotteba Izakaya Makati",
};

export default function PrivateRoomPage() {
  const images = getFolderImages("private-room");

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader title="Private Room" titleJa="個室のご案内" />
      <div className="flex-1 px-4 py-6">
        <InfoGallery
          images={images}
          note="個室の詳細情報は近日公開予定です。ご予約はMessengerよりお問い合わせください。"
        />
      </div>
    </div>
  );
}
