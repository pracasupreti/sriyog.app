'use client';

import Image from 'next/image';

export default function VMGOPage() {
  return (
    <div className="w-full">
      {/* Carousel Section */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out animate-fade">
          <Image
            src="/images/vmgo/1.jpg"
            alt="First slide"
            fill
            className="object-cover opacity-90"
          />
        </div>
      </div>

      {/* Heading */}
      <section className="border-b py-8 sm:py-10 text-center px-4">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Vision, Mission, Goals and Objectives
        </h3>
      </section>

      {/* Icon Grid */}
      <section className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {['Vision', 'Mission', 'Goals', 'Objectives'].map((item, index) => (
            <div key={item} className="mt-3">
              <Image
                src={`/images/vmgo/${index + 1}.png`}
                alt={`${item} Icon`}
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-2 sm:mt-3 font-semibold text-sm sm:text-base">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reusable section component */}
      {[
        {
          title: 'Vision',
          textColor: 'text-gray-900',
          bgColor: 'bg-gray-100',
          image: '/images/bg1.jpg',
          content: [
            'Our vision at SRIYOG is to create a future where every individual has access to opportunities that match their skills and aspirations.',
            'We envision a world where people searching for any service can easily connect with skilled professionals rather than hiring hefty commission from any service marketplace, and where an individual can have his/her digital profile showcasing their expertise.',
          ],
          reverse: false,
        },
        {
          title: 'Mission',
          textColor: 'text-white',
          bgColor: 'bg-red-600',
          image: '/images/bg2.jpg',
          content: [
            'At SRIYOG, our mission is to revolutionize the way work is connected with workers. We strive to provide a seamless platform that empowers individuals and businesses to find the perfect match for their needs, fostering opportunities for growth, collaboration, and success.',
          ],
          reverse: true,
        },
        {
          title: 'Goals',
          textColor: 'text-gray-900',
          bgColor: 'bg-gray-100',
          image: '/images/bg3.jpg',
          listItems: [
            'Facilitate Connections: Transparent and efficient interactions between users.',
            'Promote Transparency: Verification processes build trust across the platform.',
            'Empower Individuals: Equal access and inclusion for diverse communities.',
            'Drive Innovation: Constantly evolving with tech trends to improve experience.',
          ],
          reverse: false,
        },
        {
          title: 'Objectives',
          textColor: 'text-white',
          bgColor: 'bg-red-600',
          image: '/images/bg4.jpg',
          listItems: [
            'Expand Reach: Make the platform accessible to wider demographics.',
            'Enhance User Experience: Simplify and optimize the platform usability.',
            'Build Partnerships: Collaborate with institutions for growth.',
            'Promote Diversity and Inclusion: Ensure equality across users.',
            'Drive Customer Satisfaction: Feedback-driven improvements.',
          ],
          reverse: true,
        },
      ].map(({ title, textColor, bgColor, image, content, listItems, reverse }, index) => (
        <section key={index} className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} mt-10`}>
          <div
            className="md:w-1/2 h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className={`md:w-1/2 ${bgColor} ${textColor} p-6 sm:p-10`}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">{title}</h2>
            {content &&
              content.map((paragraph, idx) => (
                <p key={idx} className="mb-3 text-justify text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}
            {listItems && (
              <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base">
                {listItems.map((item, i) => {
                  const [strong, ...rest] = item.split(':');
                  return (
                    <li key={i}>
                      <strong>{strong}:</strong>{' '}
                      {rest.length > 0 ? rest.join(':').trim() : ''}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
