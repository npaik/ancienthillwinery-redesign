import { createFileRoute, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/wine/$wineId")({
  component: SingleWine,
});

export type Wine = {
  name: string;
  image: string;
  description: string;
  price: string;
};

const redWines: Wine[] = [
  {
    name: "2020 Lazerus",
    image: "/lazerus.jpg",
    description:
      "Fruit forward, light bodied and lightly oaked. Our easy drinking, all occasion wine.",
    price: "$19.91",
  },
  {
    name: "2019 Pinot Noir",
    image: "/pinor-gris-small.jpg",
    description:
      "For the Pinot Noir lover. Lighter bodied and delicately oaked. Unique to the micro climate of Ancient Hill.",
    price: "$22.96",
  },
  {
    name: "2019 Baco Noir",
    image: "/baco-noir-small.jpg",
    description:
      "Our flagship red. Heavier bodied and barrel aged. Bursting with dark, rich fruits.",
    price: "$26.00",
  },
];

const whiteWines: Wine[] = [
  {
    name: "2019 Pinot Gris",
    image: "/pinor-gris-small.jpg",
    description:
      "Refreshing and crisp. Unique to the micro climate of Ancient Hill.",
    price: "$20.79",
  },
  {
    name: "2019 Gewurztraminer",
    image: "/gewurztraminer-small.jpg",
    description: "Floral and slightly sweet. A delicious Gewurztraminer.",
    price: "$19.91",
  },
];

const roseWines: Wine[] = [
  {
    name: "2021 Rose",
    image: "/rose.jpg",
    description:
      "Vibrant color with spicy, strawberry, cranberry, citrus and floral aromas.",
    price: "$19.91",
  },
];

const allWines: Wine[] = [...redWines, ...whiteWines, ...roseWines];

function SingleWine() {
  const [wine, setWine] = useState<Wine | undefined>();
  // @ts-ignore
  const params = useParams();

  const getWineNameFromSlug = (slug: string | undefined): string => {
    return slug ? decodeURIComponent(slug).replace(/-/g, " ") : "";
  };

  useEffect(() => {
    // @ts-ignore
    const wineName = getWineNameFromSlug(params.wineId as string);
    const foundWine = allWines.find(
      (w) => w.name.toLowerCase() === wineName.toLowerCase()
    );
    setWine(foundWine);
    // @ts-ignore
  }, [params.wineId]);

  if (!wine) {
    return <div>Wine not found.</div>;
  }

  return (
    <div className="container mx-auto mt-28 pt-24">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex justify-center lg:w-1/2">
          <img
            src={wine.image}
            alt={wine.name}
            className="w-64 h-64 object-contain"
          />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
          <h2 className="text-4xl font-bold mb-4">{wine.name}</h2>
          <p className="text-xl mb-6">{wine.description}</p>
          <p className="text-2xl font-semibold mb-6">{wine.price}</p>
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
              ADD TO CART
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
              BUY CASE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
