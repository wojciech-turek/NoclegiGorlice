import React from "react";

type Props = {};

const Parking = (props: Props) => {
  return (
    <div className="bg-yellow-600 px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Parking dla gości
        </h2>
        <p className="mt-6 text-lg leading-8 text-white">
          Dla naszych gości przygotowaliśmy bezpłatny parking na terenie
          obiektu. Teren parkingu jest ogrodzony oraz oświetlony nocą.
        </p>
      </div>
    </div>
  );
};

export default Parking;
