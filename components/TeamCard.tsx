import Image from 'next/image';

const TeamCard = ({ name, position, image }: { name: string; position: string; image: string }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-xl p-6 min-h-[300px] flex flex-col items-center justify-start text-center">
      <div className="mb-8">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
      </div>
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-gray-500">{position}</p>
    </div>
  );
};

export default TeamCard;
