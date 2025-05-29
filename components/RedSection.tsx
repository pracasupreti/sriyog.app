import React from 'react';

interface RedSectionProps {
  title: string;
  children?: React.ReactNode;
}

const RedSection: React.FC<RedSectionProps> = ({ title, children }) => {
  return (
    <section className="w-full border-b bg-[#8B1414]">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-6">
        <div className="w-full md:w-8/12 lg:w-10/12 my-auto">
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-4 text-center md:text-left">
            {title}
          </h1>
          <div className="text-xs sm:text-sm lg:text-base text-white text-justify leading-relaxed">
            {children && (
            <div className="text-xs sm:text-sm lg:text-base text-white text-justify leading-relaxed">
              {children}
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedSection;
