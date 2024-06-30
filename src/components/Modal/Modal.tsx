import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { fireFighting } from "@/Sections/OurServices/Data";
import IconWithPopUp from "../IconWithPopUp/IconWithPopUp";
// import { modalContent } from "@/Sections/OurServices/Data";

const Modal = () => {
  const [open, setOpen] = useState(false);

  const [activeData, setActiveData] = useState(fireFighting[0]);
  return (
    <Dialog open={open}>
      <DialogTrigger>
        <IconWithPopUp iconId={activeData.id} iconTitle={activeData.title} iconImageUrl={activeData.img}/>
      </DialogTrigger>
      <DialogContent className="h-[80vh] md:h-[90vh] lg:h-[93vh] items-center w-[80vw] md:w-[90vw] lg:w-[94vw] flex overflow-y-auto overflow-x-hidden">
        {/* Fire fighting */}
        <div className="flex flex-col md:flex-row items-center gap-8 pt-[6vh] md:pt-0">
          <div className="md:w-[35%] lg:w-[40%]">
            <img src={activeData.img} />
            <div className="flex flex-wrap w-[70vw]">
              {fireFighting.map((item) => (
                <img
                  src={item.img}
                  className={`${
                    item.img === activeData.img ? "hidden" : "flex"
                  } w-20 md:w-16`}
                  onClick={() => {
                    setActiveData(item);
                    setOpen(true);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="md:w-[50%]">
            <DialogTitle className="text-[#2D3E6A] text-xl md:text-2xl lg:text-3xl pb-4">
              {activeData.title}
            </DialogTitle>
            <DialogDescription className="text-black lg:text-lg pb-4">
              {activeData.description}
            </DialogDescription>
            <DialogDescription>
              <ul>
                {activeData.list?.map((list) => (
                  <li className="text-black lg:text-lg">{list}</li>
                ))}
              </ul>
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
