import ImageGallery from "@/components/product/ImageGallery";
import ProductDescription from "@/components/product/ProductDescription";
import Rating from "@/components/product/Rating";
import RelatedProducts from "@/components/product/RelatedProducts";
import Reviews from "@/components/product/Reviews";

const ProductPage = () => {
  return (
    <>
      <p className="px-4 lg:px-28 lg:pt-10">
        Feature Product / <span className="text-primary">New Arrival</span>
      </p>

      <div className="flex flex-col lg:flex-row px-4 lg:px-28 lg:pt-4 gap-6">
        <ImageGallery />
        <ProductDescription />
      </div>

      <div className="flex justify-between px-4 lg:px-28 mt-16 text-[16px] lg:text-[19px] font-semibold w-[350px] lg:w-[453px] h-[25px] lg:h-[45px] lg:gap-[72px] mb-4">
        <p>Details</p>
        <p className="text-primary">Review & Rating</p>
        <p>Discussion</p>
      </div>

      <div className="px-4 lg:px-28 flex flex-col w-[350px] lg:w-[1280px] h-auto lg:h-[338px] gap-[24px] lg:flex-row">
        <Reviews  />
        <Rating  />
      </div>

      <RelatedProducts />
    </>
  );
};

export default ProductPage;
