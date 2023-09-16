import { urlFor } from "@/lib/sanity.client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PageInfo } from "types/types";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const { title, heroImage, locations, description } = pageInfo;

  return (
    <div className="relative bg-white s">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0 z-10 relative">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              {title} <br />
              <span className="text-yellow-500 block h-24">
                Stróżówka i Gorlice
              </span>
            </h1>
            <p className="text-md text-gray-500">
              Stróżówka 192, 38-300 Gorlice
            </p>
            <p className="mt-6 sm:pr-16 lg:pr-36 text-lg leading-8 text-gray-600">
              {description}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="tel:+48602447676"
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Zarezerwuj telefonicznie +48 602 44 76 76
              </a>
              <Link
                href="#rooms"
                className="text-base font-semibold leading-7 text-gray-900"
              >
                Zobacz pokoje <span aria-hidden="true">→</span>
              </Link>
            </div>
            <p className="mt-4 text-gray-600">
              lub poprzez serwis{" "}
              <Link
                href="https://www.booking.com/Share-puT7dZ"
                target={"_blank"}
                rel={"noopener noreferrer"}
                className="text-indigo-500 cursor-pointer"
              >
                Booking.com
              </Link>
              <span> (Homestay Stróżówka)</span>
            </p>
          </div>
          <Image
            className="md:hidden absolute inset-0 h-full w-full object-cover opacity-20 -z-1"
            width={2100}
            priority
            height={1400}
            src={urlFor(heroImage).url()}
            alt=""
          />
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="hidden md:block aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            width={2100}
            priority
            height={1400}
            src={urlFor(heroImage).url()}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
