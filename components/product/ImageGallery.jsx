import { ProductData } from "@/lib";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const ImageGallery = () => {
  const product = ProductData[0];

  return (
    <div>
      <div className="relative w-[350px] lg:w-[628px] h-[280px] lg:h-[519px]">
        <Image
          src={product.images[0]}
          alt={`Main view of ${product.name}`}
          className="rounded-[8px] lg:rounded-[16px] w-[320px] lg:w-[588px] h-[280px] lg:h-[519px] bg-[#F6F5FD]"
          width={400}
          height={400}
        />

        <FontAwesomeIcon
          icon={faArrowLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 border border-primary text-primary rounded-full p-2 lg:mx-2 cursor-pointer"
        />

        <FontAwesomeIcon
          icon={faArrowRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 border border-primary text-primary rounded-full p-2 lg:mx-2 cursor-pointer"
        />

        <div className="absolute bottom-2 right-2 w-[58px] h-[33px] bg-[#E0DCF8] text-sm rounded-[25px] p-2 text-center lg:hidden opacity-75">
          1/5
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-4 gap-4 mt-4">
        {product.images.slice(1).map((image, idx) => (
          <div key={idx}>
            <Image
              src={image}
              alt={`Thumbnail ${idx + 1} of ${product.name}`}
              width={100}
              height={100}
              className="lg:w-[145px] lg:h-[142px] rounded-[16px] bg-[#ECE9FE]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
