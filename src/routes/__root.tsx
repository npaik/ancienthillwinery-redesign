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
      <div className="flex flex-col min-h-screen bg-[#f8e8bb]">
        <nav className="bg-[#f8e8bb] shadow-md">
          <div className="flex justify-center px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 md:space-x-14 max-w-7xl mx-auto p-2">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Ancient Hill Winery Logo"
                  style={{ height: "3rem" }}
                />
              </Link>
              <Link
                to="/aboutUs"
                className="text-lg font-medium text-gray-700 hover:text-gray-900 hover:underline"
              >
                ABOUT US
              </Link>
              <Link
                to="/ourWines"
                className="text-lg font-medium text-gray-700 hover:text-gray-900 hover:underline"
              >
                OUR WINES
              </Link>
              <Link
                to="/wineShop"
                className="text-lg font-medium text-gray-700 hover:text-gray-900 hover:underline"
              >
                SHOP & PATIO
              </Link>
              <Link
                to="/whereToBuy"
                className="text-lg font-medium text-gray-700 hover:text-gray-900 hover:underline"
              >
                WHERE TO BUY
              </Link>
              <Link
                to="/visitUs"
                className="text-lg font-medium text-gray-700 hover:text-gray-900 hover:underline"
              >
                VISIT US
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex-grow">
          <Outlet />
        </div>

        <footer className="bg-[#222222] text-[#f8e8bb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-center">
              <div>
                <h4 className="mb-3 text-lg">Address</h4>
                <p>4918 Anderson Road</p>
                <p>Kelowna, BC, V1X 7V7</p>
                <p>Phone: 250 491 2766</p>
                <p>Email: info@ancienthillwinery.com</p>
              </div>

              <div>
                <h4 className="mb-3 text-lg">Opening hours</h4>
                <p>March 1 - October 31:</p>
                <p>Daily 10:30am to 5:30pm</p>
                <p>November 1 - February 28:</p>
                <p>Contact Us (phone or email)</p>
              </div>
              <div>
                <h4 className="mb-3 text-lg">Get Connected</h4>
                <a
                  href="https://www.facebook.com/AncientHillWinery/"
                  className="inline-block ml-1 mr-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/FacebookLogo.png" alt="Facebook" className="h-7" />
                </a>

                <a
                  href="https://twitter.com/ancienthillwine"
                  className="inline-block ml-1 mr-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/XLogo.jpg" alt="Twitter" className="h-6" />
                </a>
                <a
                  href="https://www.tripadvisor.ca/Attraction_Review-g154933-d6979521-Reviews-Ancient_Hill_Estate_Winery-Kelowna_Okanagan_Valley_British_Columbia.html"
                  className="inline-block ml-1 mr-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/TripadvisorLogo.png"
                    alt="TripAdvisor"
                    className="h-6"
                  />
                </a>
              </div>
            </div>
            <div className="border-t border-[#f8e8bb] pt-2 mt-2">
              <p className="text-center text-sm pb-6 pt-3">
                © Copyright 2024 Ancient Hill Estate Winery
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
