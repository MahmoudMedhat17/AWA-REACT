// import { iconsData } from "./Data.ts";
// import IconWithPopUp from "@/components/IconWithPopUp/IconWithPopUp.tsx";
// import { modalContent } from "./Data.ts";

const OurServices = () => {
  return (
    <div
      id="services"
      className="bg-[#2D3E6A] p-[2rem] lg:p-[5rem] flex flex-col justify-center items-center"
    >
      <div className="text-white mb-14">
        <p className="w-fit border-2 border-t-[#DFA100] border-b-[#DFA100] border-r-0 border-l-0 text-[20px] mb-[1rem]">
          What We Offer
        </p>
        <h3 className="text-[28px] lg:text-[38px] font-medium mb-[0.5rem]">
          Our Services
        </h3>
        <p className="w-[100%] lg:w-[790px] text-[14px] lg:text-[22px]">
          The Company’s policy is to select only the highest quality equipment
          for any specific requirements
        </p>
      </div>
      <div className="w-[80%] flex justify-center items-center gap-[2rem] flex-wrap cursor-pointer">
        {/* {modalContent.map((icon) => (
          <div key={icon.id}>
            <div className="flex flex-col items-center">
              <IconWithPopUp
                iconImageUrl={icon.iconImageUrl}
                iconTitle={icon.title}
                iconId={icon.id}
              />
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default OurServices;
