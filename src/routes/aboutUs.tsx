import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/aboutUs")({
  component: AboutUs,
});

function AboutUs() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap md:flex-nowrap">
          <aside className="w-full md:w-1/3 md:pr-14 pt-16 mt-1">
            <img
              src="/Ancient-Hill-Interior_2.jpg"
              alt="Ancient Hill Interior 2"
              className="w-full h-auto mb-4"
            />
            <img
              src="/Ancient-Hill-Interior_1.jpg"
              alt="Ancient Hill Interior 1"
              className="w-full h-auto"
            />
          </aside>

          <main className="w-full md:w-3/4">
            <h1 className="text-3xl font-bold mb-6">Our Story</h1>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Founding Family</h2>
              <p className="mb-4">
                Richard and Jitske Kamphuys are the owners of Ancient Hill
                Estate Winery.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">A Rich History</h2>
              <p className="mb-4">
                Tiring of big city life in the Netherlands, we decided to ‘go
                west’ and seek out a lifestyle more in tune with nature. In 1992
                we ended up in Kelowna and decided to make it our home. Buying a
                property that had an orchard on it, we set about to try our hand
                at orcharding. The same property had been a vineyard in the
                1940’s and early 1950’s, but had been converted to an orchard
                after a severe winter killed off most of the vines. When it
                became clear that the returns from orcharding were too volatile,
                the decision was made to replant a vineyard on the property and
                eventually build a winery. The Rittich brothers, after whom a
                local road is named, were one of the viticulture pioneers of the
                Okanagan. In the 1930’s they imported various vinifera varieties
                from Europe, with the goal of seeing which ones would grow well
                in the Okanagan. Based on their trials, various vineyards were
                planted in the 1940’s. The hillside across from the Kelowna
                Airport, the current location of Ancient Hill Estate Winery, was
                one of their test areas. Several abandoned vines, part of the
                vineyard planted in the 1940’s, still survive on the property to
                this day.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">The Vineyard Today</h2>
              <p className="mb-4">
                In 2005, the vineyard at Ancient Hill was planted. The varieties
                planted were: Baco Noir, Pinot Noir, Lemberger, Zweigelt,
                Gewurztraminer and Pinot Gris. All varieties were selected
                because they would grow and ripen well at Ancient Hill. In fact,
                Lemberger was the number one choice of the Rittich brothers. An
                excellent red grape variety, currently neglected in the Okanagan
                due to its unfortunate name. In 2008, Robert Mackenzie, the
                well-known architect from Penticton, was asked to design a
                winery building that fit the name and concept of Ancient Hill.
                The result is superb. And in 2009, accomplished consulting
                winemaker Christine Leroux took on the task of creating Ancient
                Hill’s first vintage. The results are equally superb.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">The Land's Legacy</h2>
              <p className="mb-4">
                The name ‘Ancient Hill’ was chosen as an acknowledgement of the
                natural forces that created the terroir of our vineyard. Around
                25,000 years ago, the site of Ancient Hill was covered by
                glaciers. These eventually started melting and in the process
                deposited large amounts of sand and gravel. Gradually, a massive
                glacial lake called ‘Lake Penticton’ was formed. About 10,000
                years ago, the site of Ancient Hill was under water, being a
                part of the shores of ‘Lake Penticton’.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Symbolism of Our Logo
              </h2>
              <p className="mb-4">
                Our logo symbolizes the interconnectedness of the various
                elements of Nature that are needed to create wine. Earth, Air
                and Water are inextricably combined. They provide the platform
                for the eternal circle of life to play out. In our case, the
                growth of the grape vine and the fruit it produces.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
