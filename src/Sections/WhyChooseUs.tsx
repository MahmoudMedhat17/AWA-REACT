import whyChooseUs from "../../public/images/why-choose-us.svg";

const WhyChooseUs = () => {
  return (
    <div className="my-[2rem] mx-[1rem] sm:my-[0rem] sm:mx-[0rem] p-0 sm:p-[1rem] lg:py-[5rem] lg:px-[1rem] xl:py-[5rem] xl:px-[8rem] flex justify-center items-start">
      <div className="w-[50%] sm:w-full md:w-[50%]">
        <h3 className="text-[#2D3E6A] text-[20px] sm:text-[24px] lg:text-[36px] xl:text-[40px] font-medium mb-[1.5rem]">
          Why Choose Us
        </h3>
        <p className="text-[16px] md:text-[16px] lg:text-[20px] xl:text-[24px] mb-[1rem]">
          AWA can arrange service and maintenance agreements, which are
          individually tailored to meet the specific requirements of each
          client. The Company comprises a team of highly trained engineers and
          technicians that provide 24-hour, 7-days a week break down service.{" "}
        </p>
        <ul className="text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[24px] p-[0.5rem] sm:pl-[2rem] list-disc">
          <li>Engineering</li>
          <li>Mechanical works</li>
          <li>Trading</li>
          <li>Maintenance</li>
          <li>Conceptual and preliminary engineering</li>
          <li>Evaluation of tender documents</li>
          <li>Design review and value engineering</li>
          <li>Project cost estimation</li>
          <li>Equipment and materials procurement</li>
          <li>Planning and scheduling</li>
          <li>Detailed design & shop drawings</li>
          <li>
            Inspection, quality assurance and control Testing &commissioning
          </li>
          <li>Operator training</li>
        </ul>
      </div>
      <div className="w-[50%] sm:w-full md:w-[50%] block">
        <img src={whyChooseUs} className="max-w-[100%] h-auto" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
