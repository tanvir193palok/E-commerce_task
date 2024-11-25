const Availability = ({ sizes, colorsName, colors }) => {
    return (
      <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[69px]">
        <div className=" w-[282px] h-[81px]">
          <p className="font-semibold text-gray-700 mb-[16px]">Available Sizes</p>
          <div className="flex gap-2">
            {sizes.map((size, idx) => (
              <span
                key={idx}
                className={`px-[16px] py-[8px] w-[40px] h-[40px] border rounded-[8px] text-gray-800 cursor-pointer ${
                  idx === 0 ? "border-primary" : "border-none"
                }`}
              >
                {size}
              </span>
            ))}
          </div>
        </div>
  
        <div className="hidden lg:block w-[282px] h-[65px] ">
          <p className="font-semibold text-gray-700 mb-4">Available Color</p>
          <div className="flex gap-4 items-center">
            {colors.map((color, idx) => (
              <div key={idx} className="flex items-center gap-2">

                <div
                  className={`w-[24px] h-[24px] rounded-[12px] cursor-pointer`}
                  style={{
                    backgroundColor: color,
                    border: color === "#F1F0F5" ? "1px solid gray" : "none", 
                  }}
                />

                <span className="text-black text-[12px]">{colorsName[idx]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Availability;
  