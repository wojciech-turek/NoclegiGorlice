import { urlFor } from "@/lib/sanity.client";
import Image from "next/image";
import React from "react";
import { Offer } from "types/types";

type Props = {
  offers: Offer[];
  description: string;
};

const SpecialOffers = ({ offers, description }: Props) => {
  if (!offers.length) return null;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Oferty Specjalne
            </h2>
            <p className="text-xl text-gray-500">{description}</p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
            >
              {offers.map((offer) => (
                <li
                  key={offer.name}
                  className="p-6 border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
                >
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <Image
                        className="rounded-lg object-cover shadow-lg"
                        src={offer.image ? urlFor(offer.image).url() : ""}
                        width={400}
                        height={300}
                        alt=""
                      />
                    </div>
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{offer.name}</h3>
                    </div>
                    <div className="text-md text-gray-500">
                      <p>{offer.description}</p>
                      <p className="mt-4">
                        <span className="font-semibold">Wygasa:</span>{" "}
                        {offer.expiryDate || "Brak daty wygaśnięcia"}
                      </p>
                      {offer.price ? (
                        <p>
                          <span className="font-semibold">Cena za osobę:</span>{" "}
                          {offer.price + " zł"}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
