import Image from "next/image";

const Offer = () => {
  return (
    <div className="w-[340px] lg:w-[1280px] h-auto lg:h-[450px] bg-[#EEECFB] flex flex-col lg:flex-row justify-center items-center lg:justify-between mx-4 lg:mx-[75px] py-4 lg:py-0">
      {/* Text Section */}
      <div className="flex-1 text-center lg:text-left px-4">
        <p className="text-[24px] font-primary text-primary">Big Deal</p>
        <p className="text-[28px] lg:text-[48px] font-semibold">
          <span className="text-primary">30% </span>off for New Customers
        </p>

        <div className="mt-4 flex items-center justify-center lg:justify-start">
          <button className="w-[149px] h-[48px] bg-primary hover:bg-primary-dark text-white rounded-[28px]">
            Shop Now
          </button>
          <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full ml-4">
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

      {/* Image Section */}
      <div className="flex-shrink-0 w-[350px] lg:w-[427px] h-[369px] lg:h-[450px] mt-4 lg:mt-0">
        <Image
          src="/offer.png"
          height={800}
          width={800}
          alt="offer"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Offer;
