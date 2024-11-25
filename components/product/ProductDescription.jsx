import { ProductData } from "@/lib";
import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Availability from "./Availability";
import Button from "./Button";
import StarRating from "./StarRating";

const ProductDescription = () => {
  return (
    <div className="w-[348px] lg:w-[612px] h-[549px] lg:h-[581px]">
      <p className="w-[193px] h-[40px] bg-[#2F1C59] rounded-[8px] text-white mb-[24px] flex items-center justify-center">
        New Arrival
      </p>
      <h3 className="w-[280px] h-[43px] font-semibold text-3xl mb-[16px] lg:mb-[24px]">
        {ProductData[0]?.name}
      </h3>

      <div className="flex justify-start w-[400px] h-[24px] items-center space-x-1 mb-[16px] lg:mb-[24px]">
        <StarRating isBig={false} />

        <span className="text-black mt-2 font-semibold pr-4 lg:pr-6">(4.0)</span>
        <span className="text-[16px] text-primary mt-2  w-[85px] font-semibold">
          121 reviews
        </span>
      </div>

      <p className="w-[280px] h-[36px] text-2xl font-bold">BDT2500</p>

      <div className="border-t border-dotted border-gray-400 my-[20px] lg:my-[32px]"></div>

      <Availability
        sizes={ProductData[0]?.sizes}
        colorsName={ProductData[0]?.colorsName}
        colors={ProductData[0]?.colors}
      />

      <div className="border-t border-dotted border-gray-400 my-[20px] lg:my-[32px]"></div>

      <div className="pb-[20px] lg:pb-[32px]">
        <p className="pb-[10px] lg:pb-[16px] font-bold">Quantity</p>
        <div className="flex items-center w-[132px] h-[48px] rounded-[24px] bg-[#ECE9FE] px-[8px] py-[8px]">
          <button className="w-[32px] h-[32px] flex  items-center justify-center">
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="mx-4 text-lg">1</span>
          <button className="w-[32px] h-[32px] flex items-center justify-center">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>

      <Button />
    </div>
  );
};

export default ProductDescription;
