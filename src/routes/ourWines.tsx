import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ourWines")({
  component: OurWines,
});

type Wine = {
  name: string;
  image: string;
  description: string;
  price: string;
};
type WineArray = Wine[];

const generateSlug = (name: string): string => {
  return encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"));
};

const renderWines = (wineArray: WineArray): JSX.Element[] => {
  return wineArray.map((wine, index) => (
    <div
      key={index}
      className="flex flex-col justify-between p-4 rounded-lg shadow-lg"
      style={{ backgroundColor: "#f8e8bb" }}
    >
      <div className="flex-1">
        <Link to={`/wine/$wineId`} params={{ wineId: generateSlug(wine.name) }}>
          <img
            src={wine.image}
            alt={wine.name}
            className="h-48 w-full object-contain mb-4"
          />
        </Link>
        <h3 className="text-2xl font-bold my-2 text-center">{wine.name}</h3>
        <p className="text-md text-center mb-2">{wine.description}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl font-semibold my-2 self-stretch text-center">
          {wine.price}
        </p>
        <button className="mt-4 bg-[#5B3003] text-white py-2 px-4 rounded-lg hover:bg-[#42382f] w-full">
          ADD TO CART
        </button>
      </div>
    </div>
  ));
};

function OurWines() {
  const redWines = [
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

  const whiteWines = [
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

  const roseWines = [
    {
      name: "2021 Rose",
      image: "/rose.jpg",
      description:
        "Vibrant color with spicy, strawberry, cranberry, citrus and floral aromas.",
      price: "$19.91",
    },
  ];

  return (
    <>
      <div className="flex flex-col bg-[#f8e8bb]">
        <img
          src="/all-bottles-big.jpg"
          alt="Ancient Hill Vineyard"
          className="w-screen h-[50vh] object-cover"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <h2 className="text-4xl font-bold my-6 ">Explore our Wines</h2>
          <p className="mb-4 text-2xl">
            Ancient Hill is an Estate Winery. Our wines are created from the
            grapes grown on site. All fermentation, processing, aging and
            bottling takes place on site as well.
          </p>
          <p className="mb-4 text-2xl">
            All grape varietals planted at Ancient Hill were chosen because they
            would ripen well at our vineyard site. And ripen well they do.
          </p>
          <p className="mb-4 text-2xl">
            Our cooler location and terroir have favoured us with aromatic
            wines, crafted under guidance of our accomplished, consulting
            winemaker Christine Leroux.
          </p>
          <p className="mb-4 text-2xl">
            To be enjoyed paired with your favourite food or by the glass on any
            occasion ……the choice is yours.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center">
          <h2 className="text-4xl font-bold pb-6">Red Wines</h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {renderWines(redWines)}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center">
          <h2 className="text-4xl font-bold pb-6">White Wines</h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {renderWines(whiteWines)}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center">
          <h2 className="text-4xl font-bold pb-6">Rose Wines</h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {renderWines(roseWines)}
          </div>
        </div>
        <p className="mb-4 text-center text-2xl pb-6">
          Please note: All our wine prices listed here are subject to 5% GST and
          10% BC PST.
        </p>
      </div>
    </>
  );
}
