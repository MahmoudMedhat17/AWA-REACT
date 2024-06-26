import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface IpopUpContentTypes {
  title: string;
  description: string;
  imageUrls: string[];
}

interface IpopUpContent {
  popUpContent: IpopUpContentTypes;
}

const Modal = ({ popUpContent }: IpopUpContent) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="h-[80vh] border-red-700 overflow-y-auto p-6">
        <div className="flex flex-wrap">
          {popUpContent.imageUrls.map((activeobj) => (
            <img src={activeobj} className="w-[100px]" />
          ))}
        </div>
        <DialogTitle className="w-full text-[#2D3E6A] text-[24px] uppercase">
          {popUpContent.title}
        </DialogTitle>
        <DialogDescription className="w-full text-[16px]">
          {popUpContent.description}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;