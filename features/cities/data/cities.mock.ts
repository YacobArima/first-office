import { City } from "../types/city.types";

const cityNames = [
  "Jakarta Pusat",
  "jakarta Selatan",
  "Surabaya",
  "Bandung",
  "Yogyakarta",
  "Bali",
  "Medan",
  "Makassar",
];

export const cities: City[] = cityNames.map((name, i) => {
  return {
    id: i + 1,
    name,
    officeCount: 1,
    image: `/assets/images/thumbnails/thumbnails-${(i % 3) + 1}.png`,
    slug: name.toLowerCase().replace(/ /g, "-"),
  };
});
