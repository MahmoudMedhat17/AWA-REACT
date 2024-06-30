import ServiceDialog from "./service-dialog";
import { modalContentv2 } from "./Data";
import FireDialog from "./fire-dialog";
const Services = () => {
  return (
    <div>
      <FireDialog />
      {modalContentv2.map((item, index) => (
        <ServiceDialog key={index} item={item} />
      ))}
    </div>
  );
};

export default Services;
