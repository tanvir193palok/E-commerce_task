"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="hidden md:flex items-center md:w-[50%] xl:w-full xl:max-w-xl relative">
      <span className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 text-sm md:text-base lg:text-lg xl:text-xl text-black">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      <input
        type="text"
        name="search"
        id="search"
        className="w-full text-xs md:text-sm lg:text-base pl-10 py-2  rounded-[25px] focus:outline-none bg-white"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
