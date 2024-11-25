import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-4 lg:mx-28 h-[56px] lg:h-[80px] relative">
      {/* Logo */}
      <div className="flex gap-3 md:gap-0 w-[96px] lg:w-[161px] h-[24px] lg:h-[40px]">
        <FontAwesomeIcon
          icon={faBars}
          className="block md:hidden text-lg text-black cursor-pointer"
        />
        <Image src="/logo.png" alt="logo" width={200} height={100} />
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex gap-[16px]">
        <Link href="/" className="text-sm md:text-base hover:text-primary">
          Home
        </Link>
        <Link href="/" className="text-sm md:text-base hover:text-primary">
          Shop
        </Link>
        <Link href="/" className="text-sm md:text-base hover:text-primary">
          Deals
        </Link>
        <Link href="/" className="text-sm md:text-base hover:text-primary">
          What&apos;s New
        </Link>
      </div>

      <div className="flex items-center">
        <div className="hidden md:block">
          <Search />
        </div>

        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="block md:hidden text-lg text-black cursor-pointer ml-4"
        />

        <div className="relative ml-4">
          <FontAwesomeIcon
            icon={faBagShopping}
            className="text-black text-lg cursor-pointer"
          />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            0
          </span>
        </div>

        <FontAwesomeIcon
          icon={faUser}
          className="text-black text-lg cursor-pointer ml-4"
        />
      </div>
    </div>
  );
};

export default Header;
