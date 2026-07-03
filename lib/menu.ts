import fs from "fs";
import path from "path";

export type Category = {
  id: string;
  label: string;
  labelJa: string;
};

export const foodCategories: Category[] = [
  { id: "sushi-sashimi", label: "Sushi & Sashimi", labelJa: "寿司・刺身" },
  { id: "rice-bowl", label: "Rice Bowls", labelJa: "丼もの" },
  { id: "salad", label: "Salad", labelJa: "サラダ" },
  { id: "nabe", label: "Hot Pot", labelJa: "鍋" },
  { id: "noodles", label: "Noodles", labelJa: "麺類" },
  { id: "appetizer", label: "Appetizer", labelJa: "おつまみ" },
  { id: "grilled", label: "Grilled & Teppan", labelJa: "焼き物・鉄板焼き" },
  { id: "fried", label: "Fried & Tempura", labelJa: "揚げ物・天ぷら" },
  { id: "rice-other", label: "Rice & Other", labelJa: "ご飯・その他" },
  { id: "dessert", label: "Dessert", labelJa: "デザート" },
];

export const drinkCategories: Category[] = [
  { id: "beer", label: "Beer", labelJa: "ビール" },
  { id: "highball", label: "Highball", labelJa: "ハイボール" },
  { id: "cocktail", label: "Cocktail", labelJa: "カクテル" },
  { id: "shochu-sake", label: "Shochu & Sake", labelJa: "焼酎・日本酒" },
  { id: "whisky", label: "Whisky", labelJa: "ウイスキー" },
  { id: "soft-drink", label: "Soft Drink", labelJa: "ソフトドリンク" },
];

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

/**
 * Lists menu images for a category by reading /public/menu/<base>/<categoryId>
 * directly, so dropping a new image file into that folder is enough to show it
 * on the site — no code change needed.
 */
export function getCategoryImages(base: "food" | "drink", categoryId: string): string[] {
  const dir = path.join(process.cwd(), "public", "menu", base, categoryId);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()))
    .sort()
    .map((file) => `/menu/${base}/${categoryId}/${file}`);
}

export function getFolderImages(folder: string): string[] {
  const dir = path.join(process.cwd(), "public", "menu", folder);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()))
    .sort()
    .map((file) => `/menu/${folder}/${file}`);
}

export const MESSENGER_USERNAME = "yottebamakati";
export const MESSENGER_URL = `https://m.me/${MESSENGER_USERNAME}`;
export const INSTAGRAM_URL = "https://instagram.com/yottebamakati";
