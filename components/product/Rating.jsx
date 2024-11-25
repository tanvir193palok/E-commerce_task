import { RatingData } from "@/lib";
import StarRating from "./StarRating";
import Bars from "./Bars";

const Rating = () => {
  return (
    <div className="w-[350px] lg:w-[441px] h-[246px] lg:h-[266px] order-1 lg:order-none ">
      <div className="flex mb-2">
        <p className="text-[16px] font-semibold">Product Review</p>
        <p className="text-primary ml-16">121 reviews</p>
      </div>

      <div className="flex justify-between w-[350px] lg:w-[411px] h-[40px]">
        <StarRating isBig={true} />
        <p className="text-[19px] font-semibold">(4.0)</p>
      </div>

      <div className="border-t border-dotted border-gray-400 my-[16px]"></div>

      <div>
        <Bars data={RatingData} />
      </div>
    </div>
  );
};

export default Rating;
