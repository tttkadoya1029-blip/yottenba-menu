import PageHeader from "@/components/PageHeader";
import MenuGallery from "@/components/MenuGallery";
import { foodCategories, getCategoryImages } from "@/lib/menu";

export const metadata = {
  title: "Food Menu | 酔っ手羽 Yotteba Izakaya Revolution",
};

export default function FoodMenuPage() {
  const imagesByCategory = Object.fromEntries(
    foodCategories.map((c) => [c.id, getCategoryImages("food", c.id)])
  );

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader active="food" />
      <MenuGallery categories={foodCategories} imagesByCategory={imagesByCategory} />
    </div>
  );
}
