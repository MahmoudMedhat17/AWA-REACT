import scrollToElement from "@/util/scrollToElement";

const AwaCol = () => {
  return (
    <div className="flex flex-col">
      <div className="text-center">
        <p className="text-[80px] md:text-[128px] font-[prata,serif] mb-[1rem]">
          AWA
        </p>
      </div>
      <div className="text-[18px] md:text-[24px] font-medium text-center">
        <p className="mb-[1rem] uppercase opacity-[0.9]">
          MEP-Low Current
          <br /> for contracting & trading
        </p>
        <p className="mb-[1rem] text-black">SINCE 2015</p>
      </div>
      <div className="mt-[2rem] flex justify-center items-center gap-[3rem] text-center">
        <button
          className="bg-[#2D3E6A] p-[0.5rem] border-none rounded-lg text-white text-[18px] h-fit"
          onClick={() => scrollToElement("contactus")}
        >
          CONTACT US
        </button>
        <div>
          <p className="text-[#254580] text-[20px] font-semibold">Call Us</p>
          <p className="font-semibold text-[18px]">+201001505067</p>
        </div>
      </div>
    </div>
  );
};

export default AwaCol;
