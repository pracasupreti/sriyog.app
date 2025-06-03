import Image from "next/image";
import RedSection from "@/components/RedSection";

const mediaCoverageData = [
  {
    id: 1,
    image: "/images/media/kantipur.webp",
    title: "“काठमाडौं, दिल्ली र दुबईमा पनि श्रीयोगको सेवा”",
    date: "Sunday, June 23, 2024",
  },
  {
    id: 2,
    image: "/images/media/kendrabindu.webp",
    title: "“मेम्बरशिप मोडलमा श्रीयोग, विदेशमा पनि सेवा विस्तारको लक्ष्य”",
    date: "Friday, June 14, 2024",
  },
  {
    id: 3,
    image: "/images/media/technology.webp",
    title: "“दमक नगरपालिकालाई स्टार्टअप र प्रविधि मैत्री शहर बनाईने”",
    date: "Saturday, June 17, 2023",
  },
  {
    id: 4,
    image: "/images/media/business.webp",
    title: "“IMEPay as digital payment service provider for Sriyog Consulting”",
    date: "Sunday, June 23, 2024",
  },
  {
    id: 5,
    image: "/images/media/arthik.webp",
    title: "“IMEPay as digital payment service provider for Sriyog Consulting”",
    date: "Sunday, June 23, 2024",
  },
  {
    id: 6,
    image: "/images/media/naya.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "Friday, February 10, 2023",
  },
  {
    id: 7,
    image: "/images/media/sansar.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "Friday, February 10, 2023",
  },
  {
    id: 8,
    image: "/images/media/desh.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "Friday, February 10, 2023",
  },
  {
    id: 9,
    image: "/images/media/nepalsamaya.svg",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "Friday, February 10, 2023",
  },
  {
    id: 10,
    image: "/images/media/setopati.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "Thursday, February 9, 2023",
  },
  {
    id: 11,
    image: "/images/media/news.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: " Thursday, February 9, 2023",
  },
  {
    id: 12,
    image: "/images/media/corporate.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: " Thursday, February 9, 2023",
  },
  {
    id: 13,
    image: "/images/media/biwi.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच डिजिटल भुक्तानीमा सम्झौता”",
    date: " Thursday, February 9, 2023",
  },
  {
    id: 14,
    image: "/images/media/nepalipatro.svg",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच डिजिटल भुक्तानीमा सम्झौता”",
    date: " Thursday, February 9, 2023",
  },
  {
    id: 15,
    image: "/images/media/capital.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच डिजिटल भुक्तानीमा सम्झौता”",
    date: " Thursday, February 9, 2023",
  },
  {
    id: 16,
    image: "/images/media/tourism.webp",
    title: "“ Agreement between IME Pay and Sriyog Consulting”",
    date: " Thursday, February 9, 2023",
  },
  {
    id: 17,
    image: "/images/media/matri.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङवीच सम्झौता”",
    date: " Thursday, February 9, 2023",
  },
  
];

const Page = () => {
  return (
    <>
      <RedSection title="Media Coverage" />

      <div className="text-black bg-white">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 mt-8">
            {mediaCoverageData.map((item) => (
              <a
                href="#"
                key={item.id}
                className="block max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition-colors space-y-4"
              >
                <div className="w-40 h-16 relative mb-4 mx-auto">
                  <Image
                    src={item.image}
                    alt="media logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <hr className="border-t border-gray-200 mb-2" />
                <h5 className="mb-2 text-base font-normal tracking-tight text-gray-900">
                  {item.title}
                </h5>
                <div className="h-4" />
                <p className="text-sm text-gray-500 mb-4">- {item.date}</p>
                <button className="bg-transparent hover:bg-[#8b1414] text-black text-xs cursor-pointer hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded-sm">
                Read more
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
