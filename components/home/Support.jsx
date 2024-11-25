import { SupportData } from "@/lib";
import Image from "next/image";

const Support = () => {
  return (
    <div
      className=" -mt-5 lg:-mt-0 pt-8 md:pt-4 pb-5 w-full h-[320px] lg:h-[82px]"
      style={{
        backgroundImage: "url('/option.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-4 lg:px-32 mx-auto">
        <div className="flex flex-col md:flex-row lg:items-center justify-between gap-4">
          {SupportData.map((item, index) => (
            <div key={index} className="flex items-center gap-4 px-4">
              <Image
                src={item.image}
                alt={item.mainText}
                width={50}
                height={50}
                className="w-[32px] lg:w-[40px] h-[32px] lg:h-[40px] object-contain"
              />
              <div>
                <h3 className="text-[16px] lg:text-[19px] font-bold lg:font-semibold text-white uppercase">
                  {item.mainText}
                </h3>
                <p className="text-[13px] text-white pt-1 uppercase">{item.subText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
