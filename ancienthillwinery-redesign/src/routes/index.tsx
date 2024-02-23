import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <div className="flex flex-col bg-[#f8e8bb]">
        <img
          src="/vineyard.png"
          alt="Ancient Hill Vineyard"
          className="w-screen object-cover"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-4xl font-bold my-6 pb-10">
            Welcome to Ancient Hill Estate Winery
          </h2>
          <p className="mb-4 text-2xl pb-10">
            Nestled in the heart of the beautiful, rural Ellison area of North
            Kelowna and directly across from the Kelowna Airport, our boutique
            winery stands on land rich with history, originally planted to
            grapes more than 60 years ago.
          </p>
          <p className="mb-4 text-2xl pb-10">
            At Ancient Hill, we specialize in small lots of tasty wines, crafted
            with care from grapes grown in our own vineyard and processed
            on-site in our European style winery.
          </p>
          <p className="mb-4 text-2xl">
            We invite you to visit us and experience a working winery in action.
            Taste the unique flavors of our wines in the wine shop, or savor
            them by the glass while relaxing on our patio overlooking the
            panoramic views of the valley.
          </p>
        </div>
      </div>
    </>
  );
}
