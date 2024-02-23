import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wineShop")({
  component: WineShop,
});

function WineShop() {
  return (
    <div className="bg-[#f8e8bb]">
      <div className="text-center">
        <img
          src="/Ancient-Hill-View-Deck_1.jpg"
          alt="View from the Deck"
          className="w-full object-cover h-[50vh]"
        />
        <h1 className="text-4xl font-bold my-6 pt-6">Wine Shop & Patio Area</h1>
      </div>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src="/Ancient-Hill-View-Deck_2.jpg"
              alt="View from the Deck"
              className="w-full object-cover h-48"
            />
            <p className="mt-4">
              Our wines are available for tasting at our European-style wine
              shop, offering a touch of ‘old world’ charm in Kelowna.
            </p>
          </div>
          <div>
            <img
              src="/Ancient-Hill-View-Deck_3.jpg"
              alt="View from the Deck"
              className="w-full object-cover h-48"
            />
            <p className="mt-4">
              Enjoy our patio area with panoramic views of the valley, where our
              wines can be savored by the bottle or glass.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-4xl font-bold my-6">Vineyard & Winery</h2>
          <p className="pb-6">
            Explore our vineyard that surrounds the winery, producing a variety
            of wines crafted with care from grapes grown on site.
          </p>
          <img
            src="/Ancient-Hill-Vineyard_1.jpg"
            alt="Vineyard View"
            className="w-full object-cover h-[50vh] py-6"
          />
        </div>
      </div>
    </div>
  );
}

export default WineShop;
