import Modal from "@/components/Modal/Modal.tsx";
import Modal2 from "../Modal/Modal2";
import { useState } from "react";

interface Iprops {
  iconImageUrl: string;
  iconTitle: string;
  iconId: number;
}

const IconWithPopUp = ({ iconImageUrl, iconTitle, iconId }: Iprops) => {
  const [activeIcon, setActiveIcon] = useState(0);

  const handleIconClick = () => {
    setActiveIcon(iconId);
  };

  return (
    <div onClick={handleIconClick}>
      <div className="flex flex-col items-center text-white">
        <img src={iconImageUrl} className="w-[100px] md:w-[150px]" />
        <p>{iconTitle}</p>
      </div>
      {/* <Modal /> */}
      {iconTitle === "Fire Fighting" && <Modal />}
      {iconTitle !== "Fire Fighting" && <Modal2 activeIcon={activeIcon} />}
    </div>
  );
};

export default IconWithPopUp;
