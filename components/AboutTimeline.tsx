import Image from "next/image";
export default function AboutTimeline() {
  return (
    <section className="w-full bg-gray-100 py-10 mt-10 mb-10">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column: Welcome Note */}
          <div className="lg:w-1/3 shrink-0">
            <div className="bg-white rounded-lg shadow p-6 sticky top-10">
              <h2 className="text-[#8B1414] text-2xl font-semibold mb-4">
                A Brief History of SRIYOG
              </h2>
              <p className="mb-4 text-black">
                Analyzing the global trend of migration, we can find the only
                reason for skyrocketing foreign employment is that people choose
                the easy way of grabbing the readymade market rather than
                creating something new by themselves.
              </p>
              <p className="text-black">
                This hampers the distribution of the skilled manpower in the
                underdeveloped countries and brings imbalance over the global
                community. Analyzing the Global Service market, we found
                unbelievable facts.
              </p>
            </div>
          </div>

          {/* Right Column: Horizontal Scrollable Timeline */}
          <div className="lg:w-2/3 overflow-x-auto text-black">
            <div className="flex gap-6 min-w-max">
              {[
                {
                  img: "/images/photoscroll1.jpg",
                  text: "Company Registration",
                  date: "14th June, 2018",
                },
                {
                  img: "/images/photoscroll2.jpg",
                  text: "Inaugurated at Kathmandu",
                  date: "12th September, 2019",
                },
                {
                  img: "/images/photoscroll3.jpg",
                  text: "MoU With MAW Skills",
                  date: "31st December, 2019",
                },
                {
                  img: "/images/photoscroll4.jpg",
                  text: "Karmashil Award Ceremony",
                  date: "12th September, 2022",
                },
                {
                  img: "/images/photoscroll5.jpg",
                  text: "MoU with IME Pay",
                  date: "8th February, 2023",
                },
                {
                  img: "/images/photoscroll6.jpg",
                  text: "New App Launched",
                  date: "17th May, 2024",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-[280px] bg-white rounded-lg shadow p-4 flex-shrink-0"
                >
                  <div className="relative w-full h-56 rounded mb-3 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.text}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <p className="text-lg font-medium">{item.text}</p>
                  <p className="text-gray-500 mt-2 text-base">
                    {item.date.split(" ")[0]}
                    <sup>
                      {item.date
                        .match(/\d+(st|nd|rd|th)/)?.[0]
                        ?.replace(/\d+/, "")}
                    </sup>{" "}
                    {item.date.replace(/\d+(st|nd|rd|th)/, "").trim()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
