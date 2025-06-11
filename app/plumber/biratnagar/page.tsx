import Image from "next/image";
import RedSection from "@/components/RedSection";
import type { Metadata } from "next";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: "Plumber in Biratnagar | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const professions = [
  {
    img: "/images/defaultlogo.png",
    title: "Dipen Mandal",
    phone: "9803234501",
    type: "Plumber",
    address: "Tintoliya",
  },
  {
    img: "/images/defaultlogo.png",
    title: "Rachana Sharma",
    phone: "9803234502",
    type: "Plumber",
    address: "Milan Chowk",
  },
  {
    img: "/images/defaultlogo.png",
    title: "Suraj Yadav",
    phone: "9803234503",
    type: "Plumber",
    address: "Roadshesh Chowk",
  },
  {
    img: "/images/defaultlogo.png",
    title: "Bipana Singh",
    phone: "9803234504",
    type: "Plumber",
    address: "Biratnagar-5",
  },
  {
    img: "/images/defaultlogo.png",
    title: "Sandeep Gupta",
    phone: "9803234505",
    type: "Plumber",
    address: "Rani",
  },
  {
    img: "/images/defaultlogo.png",
    title: "Kajal Chaudhary",
    phone: "9803234506",
    type: "Plumber",
    address: "Hatkhola",
  },
  {
    img: "/images/defaultlogo.png",
    title: "Abhishek Das",
    phone: "9803234507",
    type: "Plumber",
    address: "Devkota Chowk",
  },
  {
    img: "/images/defaultlogo.png",
    title: "Puja Sah",
    phone: "9803234508",
    type: "Plumber",
    address: "Traffic Chowk",
  },
  {
    img: "/images/defaultlogo.png",
    title: "Roshan Jha",
    phone: "9803234509",
    type: "Plumber",
    address: "Shankarpur",
  },
  {
    img: "/images/defaultlogo.png",
    title: "Alisha Karki",
    phone: "9803234510",
    type: "Plumber",
    address: "Morang College Area",
  },
];

export default function FeaturesSection() {
  return (
    <>
      <RedSection title="Plumber in Biratnagar" />
      <section className="w-full bg-white text-black pt-10">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-4">
          <div className="w-full flex justify-end p-4 px-0 py-4 -mt-12 mb-2">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                  Biratnagar
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="/plumber/kathmandu"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Kathmandu
                    </a>
                  </MenuItem>

                  <MenuItem>
                    <a
                      href="/plumber/pokhara"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Pokhara
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/plumber/chitwan"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Chitwan
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/plumber/janakpur"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Janakpur
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="birgunj"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Birgunj
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/plumber/dharan"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Dharan
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
            {professions.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center rounded-xl p-2 min-h-[400px] shadow-md border border-gray-300 bg-white hover:shadow-xl transition duration-300"
              >
                <Link
                  href={`/professions/${item.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="block w-full h-full flex flex-col items-center justify-center -mt-2"
                >
                  <Image
                    src={`${item.img}`}
                    alt={`${item.title} Icon`}
                    width={120}
                    height={120}
                    className="mx-auto mb-4 mt-2 rounded-full border border-gray-200"
                  />
                  <span className="text-lg font-semibold text-gray-800 mt-2 hover:text-[#8b1414] transition">
                    {item.title}
                  </span>
                  <span className="text-sm font-medium text-gray-600 mt-1">
                    {item.phone}
                  </span>
                  <span className="text-lg font-bold text-gray-700 mt-1">
                    {item.type}
                  </span>
                  <span className="text-sm font-bold text-gray-700 mt-1">
                    {item.address}
                  </span>

                  <button
                    type="button"
                    className="mt-8 text-black border border-gray-300 hover:bg-[#8b1414] hover:text-white cursor-pointer transition duration-200 font-medium rounded-lg text-sm px-5 py-2 shadow-sm"
                  >
                    Book Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full pt-10 pb-10 border-b border-gray-300"></section>
    </>
  );
}
