import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

export default function Timeline() {
  const timelineData = [
    {
      icon: "fa-map-marker-alt",
      title: "Deployed in Apple iOS Store",
      date: "8th Nov, 2024",
      description:
        "SRIYOG iOS app was successfully deployed in iOS Store after multiple failed attempts.",
      link: { href: "https://bit.ly/sriyogios", label: "Download App" },
      right: true,
    },
    {
      icon: "fa-arrow-left",
      title: "React Native on Android",
      date: "6th Nov, 2024",
      description:
        "September and October was bleeding phase as our team worked day and night to make new app on React Native Platform.",
      link: { href: "https://sriyog.com/app", label: "View App" },
      right: false,
    },
    {
      icon: "fa-credit-card",
      title: "Payment Integration in IME PAY",
      date: "16th May, 2024",
      description:
        "Membership fee of SRIYOG has been implemented in IME Pay App successfully.",
      right: true,
    },
    {
      icon: "fa-check-circle",
      title: "Verified in Microsoft for Startups",
      date: "6th March, 2024",
      description:
        "SRIYOG was successfully verified in Microsoft for Startups and got USD 125,000 of Microsoft for Startups credit.",
      right: false,
    },
    {
      icon: "fa-handshake",
      title: "MOU Between IME PAY and SRIYOG",
      date: "8th February, 2023",
      description:
        "An agreement has been signed between IME Pay and SRIYOG Consulting Pvt Ltd to facilitate digital payment for Sriyog.com.",
      right: true,
    },
    {
      icon: "fa-download",
      title: "100K+ Installations",
      date: "18th December, 2021",
      description: "SRIYOG app reached 100K+ Installations from Google Play Store.",
      link: { href: "https://bit.ly/sriyog", label: "Browse" },
      right: false,
    },
    {
      icon: "fa-download",
      title: "50K+ Installations",
      date: "23rd March, 2021",
      description: "SRIYOG app reached 50K+ Installations from Google Play Store.",
      link: { href: "https://bit.ly/sriyog", label: "Browse" },
      right: true,
    },
    {
      icon: "fa-rocket",
      title: "Officially Launched",
      date: "12th September, 2019",
      description:
        "SRIYOG launched its platform to use skills and experience of unemployed human resources to create income-generating opportunities.",
      right: false,
    },
    {
      icon: "fa-flask",
      title: "Released Android App",
      date: "20th April, 2018",
      description: "SRIYOG app was released on Google Play store.",
      link: { href: "https://bit.ly/sriyog", label: "Browse" },
      right: true,
    },
    {
      icon: "fa-building",
      title: "Registration",
      date: "14th June, 2018",
      description:
        "SRIYOG was registered as 'SRIYOG Consulting Pvt. Ltd' in Nepal Government Ministry of Industry, Commerce and Supplies.",
      right: false,
    },
  ];

  return (
    <section className="bg-gray-100 py-16 pb-32">
      <div className="relative mx-auto px-3 sm:px-6 md:px-8 lg:px-36 text-black max-w-screen-xl">
        {/* Vertical line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4"
          style={{ borderColor: "#8b1414" }}
        ></div>

        {timelineData.map((item, idx) => {
          const isRight = item.right;
          const justify = isRight ? "md:justify-end" : "md:justify-start";
          const alignment = isRight ? "items-start md:pl-8" : "items-start md:pr-8";
          const cardArrow = isRight
            ? "before:content-[''] before:absolute before:top-4 before:-left-4 before:border-[8px] before:border-transparent before:border-r-white"
            : "before:content-[''] before:absolute before:top-4 before:-right-4 before:border-[8px] before:border-transparent before:border-l-white";

          return (
            <div
              key={idx}
              className={`mb-16 flex flex-col md:flex-row ${justify} relative`}
            >
              {/* Icon */}
              <div
                className="z-10 absolute left-1/2 transform -translate-x-1/2 bg-[#8b1414] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
              >
                <i className={`fas ${item.icon}`}></i>
              </div>

              {/* Card */}
              <div
                className={`relative w-full md:w-1/2 mt-12 md:mt-0 ${alignment}`}
              >
                <div
                  className={`relative bg-white shadow-md rounded p-6 border-t-4 ${cardArrow}`}
                  style={{ borderTopColor: "#8b1414" }}
                >
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ color: "#8b1414" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                  <p className="text-gray-700 mb-3">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm px-4 py-2 rounded transition"
                      style={{ backgroundColor: "#8b1414", color: "white" }}
                    >
                      {item.link.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
