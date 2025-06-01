"use client"
import React from "react";

const Container = () => {
  return (
    <>
    <section className="w-full border-b bg-white">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-6">
            <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Content */}
            <div className="w-full lg:w-7/12">
                <hr className="border-t-2 border-[#8B1414] w-20 mb-2" />
                <small className="text-sm text-gray-700 uppercase">Who We Are</small>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8B1414] mt-3">
                Creating Opportunities for Everyone
                </h1>
                <p className="text-sm sm:text-base text-justify mt-4 text-gray-800">
                SRIYOG, which was registered under the Office of the Company Registrar in 2018 to establish direct
                contact between the people who work and hire skilled manpower by profiling them, and formally started
                from Kathmandu on 12 September 2019 for digital branding of professionals within the country, has provided
                thousands of users with easy and It has been providing opportunities to work through different means.
                </p>
                <p className="text-sm sm:text-base text-justify mt-4 text-gray-800">
                Analyzing the Global Service market, we found unbelievable facts:
                </p>

                <ul className="list-none pl-0 mt-4 space-y-3 text-gray-800">
                <li className="flex items-start gap-2">
                    <span className="mt-1 text-[#8B1414]">&#9679;</span>
                    <span>
                    Local experts have a tremendous market; as a result, they drop the small works whereas starters never get
                    an opportunity to prove themselves.
                    </span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="mt-1 text-[#8B1414]">&#9679;</span>
                    <span>Time management and scheduling are never done.</span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="mt-1 text-[#8B1414]">&#9679;</span>
                    <span>
                    The experts and veterans never work to build their team and gain trust. To grab this opportunity,
                    various agencies filled in the space by creating the market and are performing much smoothly.
                    </span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="mt-1 text-[#8B1414]">&#9679;</span>
                    <span>
                    But agencies are creating a hectic schedule, paying low to their employees and charging much higher to
                    the service seekers.
                    </span>
                </li>
                </ul>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-5/12">
  <div className="relative rounded shadow-md overflow-hidden h-[300px] md:h-[400px] bg-gray-100">
    {/* Background Image */}
    <img
      src="/images/mayor.jpg"
      alt="mayor"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Text near bottom with faint transparent background */}
    <p className="absolute bottom-0 left-0 right-0
      bg-opacity-30 text-center text-sm
      py-3 z-10 rounded-b-md backdrop-blur-sm text-black">
      Mr. Nagesh Koirala (Mayor of Biratnagar Metropolitan) expressing his views at
      “Karmashil Award” program held at Morang Byapar Sangh on 12 September 2022.
    </p>
  </div>
</div>



            </div>
        </div>
    </section>

</>
  );
};

export default Container;
