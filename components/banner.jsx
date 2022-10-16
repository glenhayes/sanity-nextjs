import { Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/sanity";

const Banner = ({ heading, subheading, link, image }) => {
  return (
    <div>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10  lg:w-full lg:max-w-2xl bg-white ">
            <svg
              className="absolute right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="mx-auto  max-w-7xl px-4 py-20 sm:px-6  lg:px-8 min-h-[50vh] grid items-center">
              <div className="sm:text-center lg:text-left grid gap-4">
                <h1 className="text-5xl">{heading}</h1>
                <p className="text-2xl">{subheading}</p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  {link && (
                    <Link href={link.url}>
                      <a className="rounded text-xl bg-red-600 px-4 py-2 text-white">
                        {link.label}
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src={urlFor(image).url()}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
