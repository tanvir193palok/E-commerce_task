import ImageGallery from "@/components/product/ImageGallery";
import ProductDescription from "@/components/product/ProductDescription";
import Rating from "@/components/product/Rating";
import RelatedProducts from "@/components/product/RelatedProducts";
import Reviews from "@/components/product/Reviews";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductPage = () => {
  return (
    <div className="relative">
      <p className="px-4 lg:px-28 lg:pt-10">
        Feature Product / <span className="text-primary">New Arrival</span>
      </p>

      <div className="flex flex-col lg:flex-row px-4 lg:px-28 lg:pt-4 gap-6">
        <ImageGallery />
        <ProductDescription />
        <div className="absolute w-[100px] h-[100px] hidden lg:flex lg:top-72 lg:-right-1 bg-[#581FC1] text-white py-4 px-4 rounded-tl-[16px] rounded-bl-[16px] flex-col  items-center">
          <FontAwesomeIcon icon={faShoppingBag} className="mr-2 items-center text-center" />
          <p className="text-[13px] pt-2">Your Bag</p>
          <p className="text-[13px]">0</p>
        </div>
      </div>

      <div className="flex justify-between mx-4 lg:mx-28 mt-16 text-[16px] lg:text-[19px] font-semibold w-[350px] lg:w-[453px] h-[25px] lg:h-[45px] lg:gap-[72px] mb-4">
        <p>Details</p>
        <p className="text-primary">Review & Rating</p>
        <p>Discussion</p>
      </div>

      <div className="px-4 lg:px-28 flex flex-col w-[350px] lg:w-[1280px] h-auto lg:h-[338px] gap-[24px] lg:flex-row">
        <Reviews />
        <Rating />
      </div>

      <RelatedProducts />
    </div>
  );
};

export default ProductPage;
