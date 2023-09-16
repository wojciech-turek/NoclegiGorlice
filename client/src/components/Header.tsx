import React from "react";

const navigation = [
  { name: "O nas", href: "#hero" },
  { name: "Atrakcje", href: "#attractions" },
  { name: "Pokoje", href: "#rooms" },
  { name: "Opinie", href: "#reviews" },
  { name: "Oferty", href: "#specialOffers" },
  { name: "Kontakt", href: "#contact" },
];

const Header = () => {
  return (
    <div className="bg-white sticky top-0 z-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative px-6 py-6 lg:pl-8 lg:pr-0 flex items-center">
          <nav className="flex items-center justify-between sm:h-10 w-full">
            <a href="#" className="block -m-1.5 p-1.5">
              <span className="sr-only">Noclegi u Uli</span>
              <div className="text-2xl font-bold tracking-tight text-yellow-500">
                Noclegi u Uli
              </div>
            </a>
            <div className="hidden lg:ml-12 lg:block lg:space-x-14">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
