import FireDialog from "./fire-dialog";
import ServiceDialog from "./service-dialog";
import { modalContent } from "./Data";
import { fireFightingContent } from "./Data";

const Services = () => {
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
      <div className="flex justify-center items-center flex-wrap gap-8">
        <FireDialog item={fireFightingContent} />
        {modalContent.map((item) => (
          <ServiceDialog item={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
