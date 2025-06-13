import Image from "next/image";
import RedSection from "@/components/RedSection";
import type { Metadata } from "next";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import StarRating from "@/components/StarRating";

export const metadata: Metadata = {
  title: "Cleaning Companies in Nepal | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const professions = [
  {
    name: "Sriyog Company",
    img: "/images/logo.png",
    city: "Kamalpokhari, Kathmandu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/cleaning/maitidevi",
  },
  {
    name: "Cleaning Service Nepal",
    img: "/images/cleaning/companylogo/verisk.png",
    city: "Chabahil, Bhaktapur, Nepal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/cleaning/csnepal",
  },
  {
    name: "Easy Facilities Pvt. Ltd.",
    img: "/images/cleaning/companylogo/ce.png",
    city: "Jarebar, Pokhara, Nepal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/cleaning/easy-facilities",
  },
  {
    name: "Multiple Facility Service Pvt.Ltd.",
    img: "/images/cleaning/companylogo/advertising.png",
    city: "Baneshwor , Kathmandu, Nepal",
    description:
      "Lorem ipsum dolor sit amet, jfsiejsd dsnt ut labore et dolore magna aliqua.",
    link: "/cleaning/multiplefacility",
  },
  {
    name: "Clean Services",
    img: "/images/cleaning/companylogo/sigma.png",
    city: "Gaurighat, Kathmandu, Nepal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/cleaning/cleanservices",
  },
  {
    name: "Prime Multipurpose Services Pvt. Ltd.",
    img: "/images/cleaning/companylogo/nt.png",
    city: "Srijanachowk, Pokhara, Nepal",
    description:
      "Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/cleaning/primemultipurpose",
  },
  {
    name: "Smart Cleaning",
    img: "/images/cleaning/companylogo/itnepal.png",
    city: "Khusibhu, Kathmandu, Nepal",
    description:
      "Lorem ipsum dolor sit amet, , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/cleaning/smartcleaning",
  },
  {
    name: "SpiderWalk Cleaning Company",
    img: "/images/cleaning/companylogo/rr.png",
    city: "Gongabu, Kathmandu, Nepal",
    description: "Lorem ipsum dolor sit amet  et dolore magna aliqua.",
    link: "/cleaning/spiderwalkcompany",
  },
  {
    name: "Kathmandu Pest Control Service",
    img: "/images/cleaning/companylogo/gt.png",
    city: "Basundhara, Kathmandu, Nepal",
    description:
      "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
    link: "/cleaning/kpcservice",
  },
];

export default function FeaturesSection() {
  return (
    <>
      <RedSection title="Cleaning Companies in Nepal" />
      <section className="w-full bg-white text-black pt-10">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-4">
          <div className="w-full flex justify-end p-4 px-0 py-4 -mt-12 mb-2"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {professions.map((item, index) => (
              <Link key={index} href={item.link}>
                <div
                  role="status"
                  className="space-y-8 flex flex-col items-center justify-center border border-gray-200 rounded-lg p-6 min-h-[500px] shadow-md border border-gray-200 bg-gray-100 hover:shadow-xl transition duration-300"
                >
                  <div className="flex items-center justify-center bg-gray-200 w-full h-48 rounded-sm ">
                    <Image
                      src={item.img}
                      alt={`${item.name} placeholder`}
                      width={400}
                      height={290}
                      className=" border border-gray-200 mx-auto mt-6 mb-6"
                    />
                  </div>
                  <div className="text-black mt-0 text-center text-lg font-semibold mb-2">
                    {item.name}
                  </div>
                  <StarRating rating={5} />
                  <div className="text-black -mt-2 text-center text-sm font-semibold mb-2">
                    {item.city}
                  </div>
                  <div className="text-black mt-0 text-center text-medium font-normal">
                    {item.description}
                  </div>
                  <button
                    type="button"
                    className="mt-8 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-[#8b1414] hover:text-white cursor-pointer focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2"
                  >
                    View More
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full pt-10 pb-10 border-b border-gray-300"></section>
    </>
  );
}
