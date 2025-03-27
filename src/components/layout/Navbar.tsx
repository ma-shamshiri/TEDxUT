import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { navigationLinks } from "./navigation-links";
import { MenuLinks } from "../MenuLinks";

export const Navbar = () => {
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className="flex items-center h-16 px-3 m-0 md:px-4 dark:bg-gray-900 bg-gray-50">
        <div className="flex items-center justify-between w-full md:mx-4 lg:mx-8 2xl:w-[80em] 2xl:mx-auto">
          <div className="flex items-center justify-center">
            <div className="relative hidden ml-4 text-gray-600 top-[1px] md:block">
              <MenuLinks menuLinks={navigationLinks} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
