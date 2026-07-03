import PageHeader from "@/components/PageHeader";
import MenuGallery from "@/components/MenuGallery";
import { drinkCategories, getCategoryImages } from "@/lib/menu";

export const metadata = {
  title: "Drink Menu | Yotteba Izakaya Makati",
};

export default function DrinkMenuPage() {
  const imagesByCategory = Object.fromEntries(
    drinkCategories.map((c) => [c.id, getCategoryImages("drink", c.id)])
  );

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader title="Drink Menu" titleJa="ドリンクメニュー" />
      <MenuGallery categories={drinkCategories} imagesByCategory={imagesByCategory} />
    </div>
  );
}
