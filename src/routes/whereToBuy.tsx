import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/whereToBuy")({
  component: WhereToBuy,
});

type LocationSectionProps = {
  title: string;
  details: string[];
};

function WhereToBuy() {
  const locations = [
    {
      title: "Interior BC",
      details: ["Blind Bay Village Grocer"],
    },
    {
      title: "Lake Country",
      details: ["Lake Country Liquor Store", "TBC Liquor Merchants"],
    },
    {
      title: "Kelowna",
      details: [
        "Brandt’s Creek Liquor Store",
        "Glenmore Liquor Store",
        "Metro Liquor",
        "Mission Liquor Store",
        "Mission Merchants",
        "Public Liquor",
      ],
    },
    {
      title: "Scotch Creek",
      details: ["Scotch Creek Super Value"],
    },
    {
      title: "Vernon",
      details: [
        "Monashees Wine Spirits Beer",
        "Alexander’s Liquor Store",
        "Vernon Square Liquor Store",
      ],
    },
    {
      title: "Vancouver Island",
      details: [
        "SOF Campbell River 1400 Dogwood Street",
        "SOF Parksville 818 West Island Highway",
        "SOF Sidney 2345 Beacon Avenue",
        // Add more locations if needed
      ],
    },
    {
      title: "Lower Mainland BC",
      details: [
        "SOF Clearbrook 32700 South Fraser Way",
        "SOF Cloverdale Crossing 17745 – 64th Avenue",
        "SOF East Maple Ridge 22703 Lougheed Highway",
        // Add more locations if needed
      ],
    },
    {
      title: "Okanagan",
      details: [
        "SOF Lakeshore Centre (Kelowna) 3175 Lakeshore Road",
        "SOF Orchard Plaza (Kelowna) 1876 Cooper Road",
        "SOF Penticton 2111 Main Street",
        // Add more locations if needed
      ],
    },
    {
      title: "Other Areas",
      details: [
        "SOF Sahali (Kamloops) 1210 Summit Drive",
        "SOF Spruceland (Prince George) 555 Central Street",
        // Add more locations if needed
      ],
    },
  ];

  return (
    <>
      <div className="bg-[#f8e8bb] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-12">Where to Buy</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc, index) => (
              <LocationSection
                key={index}
                title={loc.title}
                details={loc.details}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function LocationSection({ title, details }: LocationSectionProps) {
  return (
    <div className="shadow-lg rounded-lg p-4 bg-[#f8e8bb]">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-lg">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}
