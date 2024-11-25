import Image from "next/image";

const Collection = ({ isMan }) => {
  return (
    <div className="w-[360px] lg:w-[1280px] h-[357px] lg:h-[614px] mx-4 lg:mx-28 mt-16 mb-24 lg:mb-6">
      <div className=" flex flex-col lg:flex-row items-center justify-between relative overflow-visible">
        {/* Image Section */}
        <div className="w-[350px] lg:w-[621px] h-[303px] lg:h-[481px] flex items-center justify-center bg-[#EEECFB] lg:mt-[84px] relative">
          <Image
            src={isMan ? "/man.png" : "/woman.png"}
            alt="man"
            width={400}
            height={400}
            className="absolute -top-[44px] lg:-top-[100px] w-[279px] lg:w-[600px] h-[357px] lg:h-[580px] object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[50%] flex flex-col items-start justify-center lg:pl-8 mt-4 lg:mt-0">
          <p className="text-[23px] lg:text-[48px] font-bold text-left">
            {isMan ? "Men Collection" : "Women Collection"}
          </p>

          <div className="mt-4 flex items-center justify-center lg:justify-start">
            <button className="w-[149px] h-[48px] bg-primary hover:bg-primary-dark text-white rounded-[28px]">
              Shop Now
            </button>
            <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
              <Image
                src="/arrow.png"
                alt="arrow"
                height={100}
                width={100}
                className="w-[24px] h-[24px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center py-6 gap-3">
        <Image src="/mark.png" width={30} height={10} alt="mark1" />
        <Image src="/mark2.png" width={20} height={2} alt="mark1" />
        <Image src="/mark2.png" width={20} height={2} alt="mark1" />
      </div>
    </div>
  );
};

export default Collection;
