

const Button = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[328px] lg:w-[621px] h-[96px] lg:h-[40px]">
      <button className="w-[352px] h-[40px] rounded-[8px] bg-primary text-white mb-[16px] lg:mb-[0px] lg:mr-[16px]">Buy Now</button>
      <button className="w-[352px] h-[40px] rounded-[8px] border border-primary text-primary">Add to Cart</button>
    </div>
  )
}

export default Button
