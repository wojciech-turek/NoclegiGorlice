import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "types/types";

type Props = {
  info: PageInfo;
};

const Hero = ({ info }: Props) => {
  const { title } = info;

  const [text] = useTypewriter({
    words: ["Strózowce", "Gorlicach"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative bg-white mb-32">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              {title} <br />
              <span className="text-indigo-600 block h-24">
                {text} <Cursor />
              </span>
            </h1>
            <p className="mt-6 pr-8 text-lg leading-8 text-gray-600">
              Moje pokoje to idealne miejsce na wypoczynek wśród pięknej
              przyrody. W pobliżu znajdują się liczne szlaki turystyczne, a
              także atrakcje dla dzieci. Zapraszam!
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Zarezerwuj
              </a>
              <a
                href="#"
                className="text-base font-semibold leading-7 text-gray-900"
              >
                Zobacz pokoje <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            width={2100}
            height={1400}
            src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
