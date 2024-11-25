import Image from "next/image";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const Comment = () => {
  return (
    <div className="w-[350px] lg:w-[845px] h-[121px]">
      <div className="flex">
        <Image
          src="/ProductPage/user.png"
          alt="user"
          width={300}
          height={300}
          className="w-[40px] h-[40px] mr-2"
        />

        <div className="flex flex-col">
          <p className="text-[16px] font-semibold">Cameron Williamvvvson</p>
          <StarRating isBig={false} />
        </div>

        <span className="text-[13px] text-[#656565] ml-2 mt-1 ">3 days</span>
      </div>

      <p className="mt-4 text-[16px] font-bold">Very nice!!</p>
      <div className="flex mt-3">
        <FontAwesomeIcon icon={faThumbsUp} />
        <p className="ml-2 text-[13px]">10</p>
      </div>
    </div>
  );
};

export default Comment;
