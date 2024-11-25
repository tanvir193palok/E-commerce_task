import Image from "next/image";

const Bars = ({ data }) => {
  return (
    <div className="space-y-2 w-[350px] lg:w-[411px] h-[25px]">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex w-[350px] lg:w-[411px] h-[25px] items-center justify-between  space-x-2"
        >
          <p className="w-[19px] h-[21px] text-[16px] text-black text-center">
            {item.left}
          </p>
          
          <div className="flex-1">
            <Image
              src={item.image}
              alt={`bar-${item.left}`}
              width={100}
              height={16}
              className="object-contain w-[365px] h-[10px] px-2"
            />
          </div>
          
          <p className="w-[19px] h-[21px] text-[16px] text-black text-center">
            {item.right}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Bars;
