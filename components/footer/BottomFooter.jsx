import Image from "next/image";

const BottomFooter = () => {
  return (
    <div className="flex flex-col lg:flex-row text-white px-4 lg:px-20 pt-4 lg:pt-24 lg:gap-[147px]">
      <div className="w-[251px] h-[58px]">
        <p className="font-semibold pb-1 lg:pb-3">Contact Us</p>
        <p className="text-xs">support@we5ive.com</p>
      </div>

      <div className="w-[178px] h-[50px]">
        <p className="pb-1 lg:pb-2">About Us</p>
        <p className="text-xs">Contact Us</p>
      </div>

      <div className="w-[178px] h-[50px]">
        <p className="pb-1 lg:pb-2">Privacy policy</p>
        <p className="text-xs">Terms & Condition</p>
      </div>

      <div className="w-[178px] h-[69px]">
        <p className="pb-1 lg:pb-3 font-semibold">Social Link</p>
        <div className="flex gap-5">
            <Image src="/Facebook.png" alt="facebook" width={100} height={100} className="w-[24px] h-[24px]" />
            <Image src="/Twitter.png" alt="twitter" width={100} height={100} className="w-[24px] h-[24px]" />
            <Image src="/Linkedin.png" alt="linkedin" width={100} height={100} className="w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
