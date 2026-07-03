import PageHeader from "@/components/PageHeader";
import InfoGallery from "@/components/InfoGallery";
import { getFolderImages } from "@/lib/menu";

export const metadata = {
  title: "Birthday | Yotteba Izakaya Makati",
};

export default function BirthdayPage() {
  const images = getFolderImages("birthday");

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader title="Birthday" titleJa="誕生日特典" />
      <div className="flex-1 px-4 py-6">
        <InfoGallery
          images={images}
          note="誕生日特典の詳細情報は近日公開予定です。"
        />
      </div>
    </div>
  );
}
