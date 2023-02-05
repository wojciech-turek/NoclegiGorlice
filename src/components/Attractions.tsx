import { urlFor } from "@/lib/sanity.client";
import Image from "next/image";
import React from "react";
import { Attraction } from "types/types";

type Props = {
  attractions: Attraction[];
  description: string;
};

const Attractions = ({ attractions, description }: Props) => {
  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Atrakcje
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {attractions.map((attraction) => (
            <div
              key={attraction.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src={urlFor(attraction.image).url()}
                  width={400}
                  height={300}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium mb-2 text-indigo-600">
                    {attraction.type}
                  </p>

                  <p className="text-xl font-semibold text-gray-900">
                    {attraction.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {attraction.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attractions;
