"use client";

export default function Timeline() {
  const timelineData = [
    {
      icon: "fa-credit-card",
      title: "Deployed in Apple iOS Store",
      date: (
        <>
          8<sup>th</sup> Nov, 2024
        </>
      ),
      description:
        "SRIYOG iOS app was successfully deployed in iOS Store after multiple failed attempts.",
      link: { href: "https://bit.ly/sriyogios", label: "Download App" },
      right: true,
    },
    {
      icon: "fa-app",
      title: "React Native on Android",
      date: (
        <>
          6<sup>th</sup> Nov, 2024
        </>
      ),
      description:
        "September and October was bleeding phase as our team worked day and night to make new app on React Native Platform.",
      link: { href: "https://sriyog.com/app", label: "View App" },
      right: false,
    },
    {
      icon: "fa-credit-card",
      title: "Payment Integration in IME PAY",
      date: (
        <>
          16<sup>th</sup> May, 2024
        </>
      ),
      description:
        "Membership fee of SRIYOG has been implemented in IME Pay App successfully.",
      right: true,
    },
    {
      icon: "fa-check",
      title: "Verified in Microsoft for Startups",
      date: (
        <>
          6<sup>th</sup> March, 2024
        </>
      ),
      description:
        "SRIYOG was successfully verified in Microsoft for Startups and got USD 125,000 of Microsoft for Startups credit.",
      right: false,
    },
    {
      icon: "fa-handshake",
      title: "MOU Between IME PAY and SRIYOG",
      date: (
        <>
          8<sup>th</sup> February, 2023
        </>
      ),
      description:
        "An agreement has been signed between IME Pay and SRIYOG Consulting Pvt Ltd. According to the agreement, IME Pay will be the digital payment service provider of Sriyog.com. The agreement was signed with the aim of facilitating the digital payment process for SRIYOG.",
      right: true,
    },
    {
      icon: "fa-download",
      title: "100K+ Installations",
      date: (
        <>
          18<sup>th</sup> December, 2021
        </>
      ),
      description:
        "SRIYOG app was reached 100K+ Installations from Google Play Store.",
      link: { href: "https://bit.ly/sriyog", label: "Browse" },
      right: false,
    },
    {
      icon: "fa-download",
      title: "50K+ Installations",
      date: (
        <>
          23<sup>th</sup> March, 2021
        </>
      ),
      description:
        "SRIYOG app was reached 50K+ Installations from Google Play Store.",
      link: { href: "https://bit.ly/sriyog", label: "Browse" },
      right: true,
    },
    {
      icon: "fa-rocket",
      title: "Officially Launched",
      date: (
        <>
          12<sup>th</sup> September, 2019
        </>
      ),
      description:
        "SRIYOG Consulting Pvt. Ltd. has started providing such services through a website called sriyog.com (www.sriyog.com). The main objective of this digital platform is to create a way of income by using the skills and experience of the human resources who are suffering from the unemployment problem in a proper manner, according to the press release issued by the company.",
      right: false,
    },
    {
      icon: "fa-flask",
      title: "Released Android App",
      date: (
        <>
          20<sup>th</sup> April, 2018
        </>
      ),
      description: "SRIYOG app was released on Google Play store.",
      link: { href: "https://bit.ly/sriyog", label: "Browse" },
      right: true,
    },
    {
      icon: "fa-bolt",
      title: "Registration",
      date: (
        <>
          14<sup>th</sup> June, 2018
        </>
      ),
      description:
        'SRIYOG was registered as "SRIYOG Consulting Pvt. Ltd" on 14 June 2018 in Nepal Government Ministry of Industry, Commerce and Supplies Office of the Company Registrar Tripureshwor, Kathmandu, Nepal.',
      right: false,
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-36">
        <div id="timeline" className="relative">
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className={`mb-12 flex flex-col md:flex-row items-start ${
                item.right ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 flex justify-center items-center w-14 h-14 bg-gray-200 rounded-full text-green-600 text-2xl">
                <i className={`fa ${item.icon}`}></i>
              </div>

              {/* Content Container */}
              <div
                className={`mt-4 md:mt-0 md:max-w-xl ${
                  item.right ? "text-right md:pr-10" : "text-left md:pl-10"
                }`}
              >
                <h2 className="font-semibold text-lg md:text-xl mb-1">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-xs md:text-sm mb-2">{item.date}</p>
                <p className="text-gray-700 text-sm md:text-base mb-3">
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-green-600 text-green-600 px-4 py-1.5 rounded hover:bg-green-600 hover:text-white transition"
                  >
                    {item.link.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
