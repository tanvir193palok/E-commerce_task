import { ProductData } from "@/lib";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const ImageGallery = () => {
  const product = ProductData[0];

  return (
    <div>
      <div className="relative w-[350px] lg:w-[628px] h-[280px] lg:h-[519px] ">
        <Image
          src={product.images[0]}
          alt={`Main view of ${product.name}`}
          className="rounded-[8px] lg:rounded-[16px] w-[350px] lg:w-[628px] h-[280px] lg:h-[519px] bg-[#F6F5FD]"
          width={800}
          height={800}
        />

        <FontAwesomeIcon
          icon={faArrowLeft}
          className="absolute top-1/2 left-0 border border-primary text-primary rounded-full p-2 lg:mx-2 cursor-pointer"
        />

        <FontAwesomeIcon
          icon={faArrowRight}
          className="absolute top-1/2 right-0 border border-primary text-primary rounded-full p-2 lg:mx-2 cursor-pointer"
        />
      </div>

      <div className="hidden lg:grid grid-cols-4 gap-4 mt-4">
        {product.images.slice(1).map((image, idx) => (
          <div key={idx} className="">
            <Image
              src={image}
              alt={`Thumbnail ${idx + 1} of ${product.name}`}
              width={100}
              height={100}
              className="w-[145px] h-[142px] rounded-[16px] bg-[#ECE9FE]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
