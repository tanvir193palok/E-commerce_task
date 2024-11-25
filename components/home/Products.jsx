import { BigDealData } from "@/lib";
import ProductCard from "../product/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  return (
    <div className="mx-4 lg:mx-28 py-[24px]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[15px] lg:text-[19px] text-[#7E53D4] uppercase">Summer</p>
          <p className="text-[25px] lg:text-[28px] font-bold text-[#1D1D1D] pb-3">Big Deal</p>
        </div>
        <div className="flex items-center lg:mr-4">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="bg-white border border-primary text-primary rounded-full p-2 mx-2 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            className="bg-white border border-primary text-primary rounded-full p-2 cursor-pointer"
          />
        </div>
      </div>

      <div className="relative">
        <div className="flex overflow-x-auto space-x-4 md:hidden">
          {BigDealData.map((product, index) => (
            <div key={index} className="flex-shrink-0 w-[300px]">
              <ProductCard key={index} product={product} isCategorized={false} />
            </div>
          ))}
        </div>


        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6 w-[1280px] h-[400px] bg-white mb-4">
          {BigDealData.map((product, index) => (
            <ProductCard key={index} product={product} isCategorized={false} />
          ))}
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6 w-[1280px] h-[400px] bg-white mb-4">
        {BigDealData.map((product, index) => (
          <ProductCard key={index} product={product} isCategorized={false} />
        ))}
      </div>
      </div>

      <div className="flex justify-center mt-4">
        <button className="py-2 px-6 bg-primary text-white rounded-lg hover:bg-primary-dark">
          See more
        </button>
      </div>
    </div>
  );
};

export default Products;
