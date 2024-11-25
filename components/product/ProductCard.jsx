import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

const ProductCard = ({ product, isCategorized }) => {
  return (
    <div className="w-[302px] h-[400px] rounded-[16px] p-[8px]">
      {/* Product Image */}
      <div className="flex justify-center rounded-[8px]">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className={`w-[286px] ${isCategorized ? "h-[287px]" : "h-[260px]"} object-contain`}
        />
      </div>

      {/* Star Rating */}
      {!isCategorized && (
        <div className="flex justify-start items-center mt-2 px-[8px] space-x-1 text-yellow-500">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarRegular} />
          <FontAwesomeIcon icon={faStarRegular} />
          <span className="text-black">(50)</span>
        </div>
      )}

      {/* Product Name and Price */}
      <div className="flex justify-between items-center mt-2 px-[8px]">
        <h3 className="text-[16px] text-gray-800">{product.name}</h3>
        <p className="text-[19px] font-semibold text-[#1D1D1D]">
          BDT {product.price}
        </p>
      </div>

      {/* Add to Cart Button */}
      <div className="mt-4">
        <button className="w-full px-[24px] py-2 text-[#7E53D4] font-semibold text-[16px] border border-[#7E53D4] rounded-[8px]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
