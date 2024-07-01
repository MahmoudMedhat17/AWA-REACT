import scrollToElement from "@/util/scrollToElement";

const CustomSlider = () => {
  return (
    <div
      className="w-[100%] h-[100vh] bg-top bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.116), transparent 100%),url(/images/BannerImgs/hero.png)`,
      }}
    >
      <div className="flex flex-col justify-center items-center h-[100%] px-0 lg:px-[1rem] xl:px-0">
        <div className="flex flex-col md:flex-row justify-center items-center pt-20 md:mb-[1rem]">
          <p className="text-[50px] md:text-[80px] lg:text-[128px] font-[prata,serif] mb-[1rem]">
            AWA
          </p>
          <p className="text-[#003057] font-bold text-[16px] lg:text-[20px] xl:text-[25px] text-center max-w-[70%] lg:max-w-[50%]">
            Experience the future with confidence through our revolutionary
            partnership with Omni Clouds, a leader in network, data
            communication and AI. Unleash seamless integration, limitless
            scalability, and unparalleled reliability. Step into the future with
            confidence through our collaboration.
          </p>
          <img
            src="/images/BannerImgs/omniClouds.png"
            className="w-[200px] lg:w-fit mb-[1.5rem] md:mb-0"
          />
        </div>
        <div className="text-[18px] md:text-[24px] font-medium text-center">
          <p className="mb-[1rem] uppercase opacity-[0.9]">
            MEP-Low Current <br /> for contracting & trading{" "}
          </p>
          <p className="mb-[1rem] opacity-[0.9]">SINCE 2015</p>
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
    </div>
  );
};

export default CustomSlider;
