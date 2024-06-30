import { modalContent } from "@/Sections/OurServices/Data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface Iprops {
  activeIcon: number;
  open: boolean;
}

const Modal2 = ({ activeIcon }: Iprops) => {
  return (
    <Dialog>
      <DialogContent className="h-[80vh] md:h-[90vh] lg:h-[93vh] w-[80vw] md:w-[90vw] lg:w-[94vw] overflow-y-auto overflow-x-hidden">
        {/* Other modals */}
        <div className="flex flex-col md:flex-row gap-8 pt-[6vh] md:pt-0">
          {modalContent.map(
            (item) =>
              item.id === activeIcon && (
                <div className="flex flex-col items-center md:flex-row gap-8">
                  {item.imageUrls.map((imgUrl) => (
                    <div className="md:w-[35%] lg:w-[40%]">
                      <img
                        src={imgUrl}
                        className="w-[70vw] h-[60vh] md:h-full lg:h-fit"
                      />
                    </div>
                  ))}
                  <div className="md:w-[40%]">
                    <DialogTitle className="text-[#2D3E6A] text-xl md:text-2xl lg:text-3xl pb-4 uppercase">
                      {item.title}
                    </DialogTitle>
                    <DialogDescription className="text-black lg:text-xl pb-4 max-w-[90%]">
                      {item.description}
                    </DialogDescription>
                    <DialogDescription className="text-black lg:text-lg pb-2">
                      {item.secondDesc}
                    </DialogDescription>
                    <DialogDescription>
                      <ul>
                        {item.list?.map((list) => (
                          <li className="text-black lg:text-lg">{list}</li>
                        ))}
                      </ul>
                    </DialogDescription>
                  </div>
                </div>
              )
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal2;
