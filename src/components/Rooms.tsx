import { urlFor } from "@/lib/sanity.client";
import { classNames } from "@/utils/classNames";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Room } from "types/types";

type Props = {
  rooms: Room[];
  description: string;
};

const roomTypes = [
  { name: "Pokoje 1-osobowe", value: 1 },
  { name: "Pokoje 2-osobowe", value: 2 },
  { name: "Pokoje 3-osobowe", value: 3 },
  { name: "Pokoje 4-osobowe", value: 4 },
];

const locations = [
  { name: "Gorlice", value: "Gorlice" },
  { name: "Stróżówka", value: "Stróżówka" },
];

const Rooms = ({ rooms, description }: Props) => {
  const [roomFilter, setRoomFilter] = React.useState<number | null>(null);
  const [locationFilter, setLocationFilter] = React.useState<string | null>(
    null
  );

  function getRooms(maxGuests: number, location: string, rooms: Room[]) {
    let filteredRooms = [];

    for (let i = 0; i < rooms.length; i++) {
      let room = rooms[i];
      if (room.maxGuests === maxGuests && room.location === location) {
        filteredRooms.push(room);
      }
    }

    return filteredRooms;
  }

  const filteredRooms = React.useMemo(() => {
    if (roomFilter && locationFilter) {
      return getRooms(roomFilter, locationFilter, rooms);
    } else if (roomFilter) {
      return rooms.filter((room) => room.maxGuests === roomFilter);
    } else if (locationFilter) {
      return rooms.filter((room) => room.location === locationFilter);
    } else {
      return rooms;
    }
  }, [roomFilter, locationFilter, rooms]);

  if (!rooms.length) return null;

  rooms.forEach((room) => {
    room.price.sort((a, b) => a.peopleCount + b.peopleCount);
  });

  const getImageUrl = (room: Room, imageIndex: number) => {
    try {
      return urlFor(room.images[imageIndex]).url();
    } catch {
      console.log("No image for room", room.name, "at index", imageIndex);
      return "";
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pokoje
          </h2>
          <p className="mt-4 text-gray-500">{description}</p>
          <p className="mt-4 text-gray-500 font-semibold">
            Istnieje możliwość zakupu śniadań za dopłatą.
          </p>
          <div className="mt-4 flex gap-4 items-center justify-center">
            {roomTypes.map((roomType) => {
              return (
                <button
                  type="button"
                  key={roomType.value}
                  onClick={() => {
                    if (roomFilter === roomType.value) {
                      setRoomFilter(null);
                    } else {
                      setRoomFilter(roomType.value);
                    }
                  }}
                  className={classNames(
                    roomType.value === roomFilter
                      ? "bg-indigo-500 text-white shadow"
                      : "bg-white text-gray-700",
                    "inline-flex items-center rounded-md border border-gray-300  px-3 py-2 text-sm font-medium leading-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  )}
                >
                  {roomType.name}
                </button>
              );
            })}
          </div>
          <div className="mt-4 flex gap-4 items-center justify-center">
            {locations.map((location) => {
              return (
                <button
                  type="button"
                  key={location.value}
                  onClick={() => {
                    if (locationFilter === location.value) {
                      setLocationFilter(null);
                    } else {
                      setLocationFilter(location.value);
                    }
                  }}
                  className={classNames(
                    location.value === locationFilter
                      ? "bg-indigo-500 text-white shadow"
                      : "bg-white text-gray-700",
                    "inline-flex items-center rounded-md border border-gray-300  px-3 py-2 text-sm font-medium leading-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  )}
                >
                  {location.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-16 space-y-16">
          {filteredRooms.length ? (
            filteredRooms.map((room, roomIdx) => (
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
                  <h3 className="text-xl font-medium text-gray-900">
                    {room.name}
                  </h3>
                  <p className="text-lg text-gray-700 mt-2">{room.location}</p>
                  <p className="mt-2  text-gray-500">{room.description}</p>
                  <div className="text-gray-500 text-sm mt-4">
                    <p>
                      <span className="font-semibold text-yellow-700">
                        Ilość łóżek:
                      </span>{" "}
                      <span>{room.bedCount}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-yellow-700">
                        Rodzaj łóżek:
                      </span>{" "}
                      <span>{room.bedType}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-yellow-700">
                        Maksymalna ilość gości:
                      </span>{" "}
                      <span>{room.maxGuests}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-yellow-700">
                        Wyposażenie:{" "}
                      </span>
                      {room.equipment?.join(", ")}
                    </p>
                    <div className="flex gap-1">
                      <div className="font-semibold text-yellow-700">
                        Cena:{" "}
                      </div>
                      <div>
                        {room.price.sort() &&
                          room.price.map((price) => {
                            return (
                              <div key={price._key}>
                                Przy {price.peopleCount}{" "}
                                {price.peopleCount === 1 ? "osobie" : "osobach"}
                                : {price.pricePerPerson} zł / noc / osoba
                              </div>
                            );
                          })}
                      </div>
                    </div>
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
                  <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation
                    pagination={{ clickable: true }}
                    style={{
                      //@ts-ignore
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                      "--swiper-navigation-size": "30px",
                    }}
                    className="rounded-lg"
                  >
                    {room.images.map((image, i) => (
                      <SwiperSlide
                        key={image._id}
                        virtualIndex={i}
                        className="aspect-w-5 aspect-h-3 overflow-hidden rounded-lg bg-gray-100"
                      >
                        <Image
                          priority
                          width={1024}
                          height={768}
                          quality={100}
                          src={getImageUrl(room, i)}
                          alt={room.name}
                          className="object-cover object-center"
                        />
                        <Image
                          src={getImageUrl(room, i + 1)}
                          alt={room.name}
                          className="invisible object-cover object-center"
                          quality={100}
                          width={1024}
                          height={768}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-900">
                Brak wyników
              </p>
              <p className="text-lg text-gray-700 mt-2">
                Spróbuj zmienić kryteria wyszukiwania
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
