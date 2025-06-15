"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper";
import Link from "next/link";

const images = [
  "/images/package/images/sofa1.png",
  "/images/package/images/sofa2.jpg",
  "/images/package/images/sofa3.jpg",
  "/images/package/images/sofa4.png",
  "/images/package/images/sofa5.png",
  "/images/package/images/sofa6.png",
  "/images/package/images/sofa7.jpg",
  "/images/package/images/sofa7.jpg",
];

const packages = [
  {
    img: "/images/package/sofa1.png",
    title: "Package 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi minima officiis debitis ullam eligendi beatae dolorum? Reprehenderit aspernatur non incidunt facilis! Amet, voluptas eaque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur illo aspernatur necessitatibus consequuntur quia iure autem atque, natus impedit placeat eius quibusdam voluptates sequi?",
  },
  {
    img: "/images/package/sofa2.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi minima officiis debitis ullam eligendi beatae dolorum? Reprehenderit aspernatur non incidunt facilis! Amet, voluptas eaque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur illo aspernatur necessitatibus consequuntur quia iure autem atque, natus impedit placeat eius quibusdam voluptates sequi?",
  },
  {
    img: "/images/package/sofa4.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi minima officiis debitis ullam eligendi beatae dolorum? Reprehenderit aspernatur non incidunt facilis! Amet, voluptas eaque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur illo aspernatur necessitatibus consequuntur quia iure autem atque, natus impedit placeat eius quibusdam voluptates sequi?",
  },
  {
    img: "/images/package/sofa5.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi minima officiis debitis ullam eligendi beatae dolorum? Reprehenderit aspernatur non incidunt facilis! Amet, voluptas eaque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur illo aspernatur necessitatibus consequuntur quia iure autem atque, natus impedit placeat eius quibusdam voluptates sequi?",
  },
];

const Page = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <div className="relative w-full h-96 md:h-112">
        <Image
          src="/images/cleaning/slide2.jpg"
          alt="housecleaning"
          fill
          className="rounded-md object-cover"
        />
      </div>

      <div className="relative mt-10 flex mb-10 max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-4 items-center">
        {/* Custom Left Arrow */}
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className=" px-4 cursor-pointer group focus:outline-none"
        >
          <span className=" inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={2}
          spaceBetween={16}
          navigation={false}
          loop={true}
          breakpoints={{
            728: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 5 },
          }}
          modules={[Navigation]}
          className="w-full"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-42 rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Sofa ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="mt-10 mb-10 text-black max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 place-items-center px-3 sm:px-6 md:px-8 lg:px-36 py-4 ">
        {/* Description - 8 parts */}
        <div className="col-span-3">
          <h1 className="text-3xl font-bold mb-4">Description</h1>
          <p>
            {/* Your description content here */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. e quo sunt
            perspiciatis ex, sequi magnam fugiat ut modi dolores. Ex, vero
            soluta dolore nam dolores optio, maxime incidunt natus aliquam
            tempore ratione! Et?
          </p>
          <p>
            {/* Your description content here */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            molestias cupiditate laboriosam eius, accusamus unde facere quo sunt
            perspiciatis ex, sequi magnam fugiat ut modi dolores. Ex, vero
            soluta dolore nam dolores optio, maxime incidunt natus aliquam
            tempore ratione! Et?
          </p>
          <p>
            {/* Your description content here */}
            Lorem ipsum dolor sit, Ex, vero soluta dolore nam dolores optio,
            maxime incidunt natus aliquam tempore ratione! Et?
          </p>
          <p>
            {/* Your description content here */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            molestias cupiditate laboriosam eius, accusamus unde facere quo sunt
            perspiciatis ex, sequi magnam fugiat ut modi dolores. Ex, vero
            soluta dolore nam dolores optio, maxime incidunt natus aliquam
            tempore ratione! Et?
          </p>
        </div>

        {/* Testimonials - 4 parts */}
        <div className="col-span-2">
          {" "}
          {/**shadow, bg-gray-50 // p-10 */}
          <div className="w-80 flex flex-col items-center rounded-lg">
            <Image
              className="h-20 w-20 rounded-full"
              src="/images/defaultlogo.png"
              alt="userImage1"
              width={200}
              height={200}
            />
            <h2 className="text-lg text-gray-900 font-medium mt-2">
              Donald Jackman
            </h2>
            <p className="text-sm text-gray-500">Graphic Designer</p>
            <div className="flex items-center justify-center mt-3 gap-1">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
            </div>
            <p className="text-center text-[15px] mt-3 text-gray-600">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
          </div>
        </div>
      </div>
      {/**this is packages section */}
      <div className="mt-10 mb-10 text-black max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-4">
        <h1 className="text-3xl font-bold mb-4">Other Packages</h1>
        <div className="space-y-10">
          {packages.map((item, index) => (
            <div key={index} className="flex  items-center ">
              <Image
                src={item.img}
                width={250}
                height={250}
                alt={`Package ${index + 1}`}
                className="rounded-lg"
              />
              <div className="mt-4 md:mt-0 md:ml-10 text-center md:text-left">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 mb-10 text-black max-w-screen-xl flex justify-center items-center mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-4">
        <Link href="#">
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-[#8b1414] hover:text-white cursor-pointer focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-lg shadow-md px-6 py-2"
          >
            Book Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default Page;
