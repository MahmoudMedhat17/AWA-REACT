import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ServicesIcon from "./service-icon";
interface IServiceDialogProps {
  item: {
    iconImage: string;
    images: string[];
    title: string;
    des: string;
    list?: string[];
  };
}
const ServiceDialog = ({ item }: IServiceDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <ServicesIcon img={item.iconImage} title={item.title} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDialog;
