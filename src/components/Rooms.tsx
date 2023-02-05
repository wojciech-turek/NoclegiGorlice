import { urlFor } from "@/lib/sanity.client";
import { classNames } from "@/utils/classNames";
import Image from "next/image";
import React from "react";
import { Room } from "types/types";

type Props = {
  rooms: Room[];
  description: string;
};

const Rooms = ({ rooms, description }: Props) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pokoje
          </h2>
          <p className="mt-4 text-gray-500">{description}</p>
        </div>
        <div className="mt-16 space-y-16">
          {rooms.map((room, roomIdx) => (
            <div
              key={room.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  roomIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4"
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {room.name}
                </h3>
                <p className="mt-2  text-gray-500">{room.description}</p>
                <div className="text-gray-500 text-sm mt-6">
                  <p>
                    <span className="font-semibold">Lokalizacja:</span>{" "}
                    <span>{room.location}</span>
                  </p>
                </div>
                <div className="text-gray-500 text-sm">
                  <span className="font-semibold">Cechy: </span>
                  {room.attributes.join(", ")}
                </div>
              </div>
              <div
                className={classNames(
                  roomIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8"
                )}
              >
                <div className="aspect-w-5 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    width={1920}
                    height={1080}
                    src={urlFor(room.images[0]).url()}
                    alt={room.name}
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
