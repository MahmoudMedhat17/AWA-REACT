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
      <DialogContent className="w-[100vw] h-[100vh] overflow-y-auto z-[100] p-[3rem]">
        {popUpContent.imageUrls.map((imgUrl) => (
          <div className="w-full">
            <img src={imgUrl} />
          </div>
        ))}
        <DialogTitle className="w-full text-[24px] uppercase">
          {popUpContent.title}
        </DialogTitle>
        <DialogDescription className="w-full text-black text-[16px]">
          {popUpContent.description}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
