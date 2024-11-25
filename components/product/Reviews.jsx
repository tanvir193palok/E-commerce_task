import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Comment from "./Comment";

const Reviews = () => {
  return (
    <div className="w-[350px] lg:w-[845px] h-[338px] lg: gap-[24px] order-2 lg:order-none pt-6 lg:pt-0">
      <div className="w-[121px] h-[40px] rounded-[8px] border border-primary py-[8px] px-[16px] mb-[24px]">
        Newest{" "}
        <span className="text-sm ml-2">
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>

      <Comment />
      <div className="border-t border-dotted border-gray-400 my-[20px]"></div>
      <Comment />
    </div>
  );
};

export default Reviews;
