import Image from "next/image";

const TeamCard = ({
  name,
  position,
  image,
}: {
  name: string;
  position: string;
  image: string;
}) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-xl p-6 min-h-[300px] flex flex-col items-center justify-start text-center border border-gray-300 hover:shadow-xl transition duration-300">
      {/* Make this a flex column and center items */}
      <div className="flex flex-col items-center mt-6">
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
        <div className="mt-4">
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
