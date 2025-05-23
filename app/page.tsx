import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto my-6 md:my-10 px-3 sm:px-6 md:px-8 lg:px-60 flex flex-col-reverse md:flex-row justify-between items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start space-y-6 w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl text-center md:text-left mt-4">
            Find Skilled Professionals
          </h1>
          <p className="text-xl text-center md:text-left">100K+ Downloads</p>
          <p className="font-semibold text-center md:text-left">Now India Added</p>
          <div className="flex space-x-3 md:space-x-4 justify-center md:justify-start">
            <a href="https://bit.ly/sriyog" target="_blank" rel="noreferrer">
              <img src="images/google.png" alt="Google Play Store" className="h-8 md:h-12 w-auto" />
            </a>
            <a href="https://bit.ly/sriyogios" target="_blank" rel="noreferrer">
              <img src="/images/apple.png" alt="Apple App Store" className="h-8 md:h-12 w-auto" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="mobile-image w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <Image src="/images/mobile.png" alt="Mobile App Preview" width={320}
        height={384} className="h-80 md:h-96 w-auto" />
        </div>
      </div>
    </>
  );
}
