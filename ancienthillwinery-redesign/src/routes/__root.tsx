import { useEffect } from "react";
import { Outlet, Link } from "@tanstack/react-router";
import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  useEffect(() => {
    document.documentElement.classList.add("overflow-y-scroll");

    return () => {
      document.documentElement.classList.remove("overflow-y-scroll");
    };
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-[#f8e8bb] shadow-md">
          <div className="flex justify-center px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 md:space-x-14 max-w-7xl mx-auto p-6">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Ancient Hill Winery Logo"
                  style={{ height: "7rem" }}
                />
              </Link>
              <Link
                to="/aboutUs"
                className="text-2xl font-medium text-gray-700 hover:text-gray-900 hover:underline"
              >
                ABOUT US
              </Link>
              <Link
                to="/ourWines"
                className="text-2xl font-medium text-gray-700 hover:text-gray-900 hover:underline"
              >
                OUR WINES
              </Link>
              <Link
                to="/wineShop"
                className="text-2xl font-medium text-gray-700 hover:text-gray-900 hover:underline"
              >
                SHOP & PATIO
              </Link>
              <Link
                to="/whereToBuy"
                className="text-2xl font-medium text-gray-700 hover:text-gray-900 hover:underline"
              >
                WHERE TO BUY
              </Link>
              <Link
                to="/visitUs"
                className="text-2xl font-medium text-gray-700 hover:text-gray-900 hover:underline"
              >
                VISIT US
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex flex-col min-h-screen bg-[#f8e8bb]">
          <Outlet />
        </div>

        <footer className="bg-[#222222] text-[#f8e8bb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-bold text-center">
              <div>
                <h4 className="mb-3 text-2xl">Address</h4>
                <p>4918 Anderson Road</p>
                <p>Kelowna, BC, V1X 7V7</p>
                <p>Phone: 250 491 2766</p>
                <p>Email: info@ancienthillwinery.com</p>
              </div>

              <div>
                <h4 className="mb-3 text-2xl">Opening hours</h4>
                <p>March 1 - October 31:</p>
                <p>Daily 10:30am to 5:30pm</p>
                <p>November 1 - February 28:</p>
                <p>Contact Us (phone or email)</p>
              </div>
              <div>
                <h4 className="mb-3 text-2xl">Get Connected</h4>
                <a
                  href="https://www.facebook.com/AncientHillWinery/"
                  className="inline-block ml-1 mr-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    className="h-6 w-6"
                  >
                    <path
                      fill="#0866FF"
                      d="M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z"
                    />
                    <path
                      fill="white"
                      d="M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z"
                    />
                  </svg>
                </a>

                <a
                  href="https://twitter.com/ancienthillwine"
                  className="inline-block ml-1 mr-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 fill-current"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.tripadvisor.ca/Attraction_Review-g154933-d6979521-Reviews-Ancient_Hill_Estate_Winery-Kelowna_Okanagan_Valley_British_Columbia.html"
                  className="inline-block ml-1 mr-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/tripadvisor.svg"
                    alt="TripAdvisor"
                    className="h-6"
                  />
                </a>
              </div>
            </div>
            <div className="border-t border-[#f8e8bb] pt-2 mt-2">
              <p className="text-center text-sm pb-8 pt-6">
                © Copyright 2024 Ancient Hill Estate Winery
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
