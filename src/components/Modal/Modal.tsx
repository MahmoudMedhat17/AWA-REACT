import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

// interface IpopUpContentTypes {
//   title: string;
//   description: string;
//   imageUrls: string[];
// }

// interface IpopUpContent {
//   popUpContent: IpopUpContentTypes;
// }

const fireFighting = [
  {
    img: "/images/services/firefighting/firefighting-1.png",
    title: "FIRE FIGHTI21pkfaNG",
    description:
      "AWA, provides intruder detection systems for Commercial or Government Organizations and has many years of Experience in installing and servicing all types of Security Alarm systems. and firefighting all products, prior to being supported by the company, are thoroughly tested by our technicians with regard to their features and in particular, to reliability. AWA, systems range from simple and easy to use general security systems, to some of the most complex system in Australia. The addition of Back-to-Base central monitoring for offices and factories means your premises is always being watched. AWA, also install major systems utilizing various technologies such as Video Motion Detection, Perimeter Protection and Closed Circuit television equipment. ",
  },
  {
    img: "/images/services/firefighting/firefighting-2.png",
    title: "FIRE F3213IGHTING",
    description:
      "AWA, provides intruder detection systems for Commercial or Government Organizations and has many years of Experience in installing and servicing all types of Security Alarm systems. and firefighting all products, prior to being supported by the company, are thoroughly tested by our technicians with regard to their features and in particular, to reliability. AWA, systems range from simple and easy to use general security systems, to some of the most complex system in Australia. The addition of Back-to-Base central monitoring for offices and factories means your premises is always being watched. AWA, also install major systems utilizing various technologies such as Video Motion Detection, Perimeter Protection and Closed Circuit television equipment. ",
  },
  {
    img: "/images/services/firefighting/firefighting-3.png",
    title: "FIRE FIGHTI123NG",
    description:
      "AWA, provides intruder detection systems for Commercial or Government Organizations and has many years of Experience in installing and servicing all types of Security Alarm systems. and firefighting all products, prior to being supported by the company, are thoroughly tested by our technicians with regard to their features and in particular, to reliability. AWA, systems range from simple and easy to use general security systems, to some of the most complex system in Australia. The addition of Back-to-Base central monitoring for offices and factories means your premises is always being watched. AWA, also install major systems utilizing various technologies such as Video Motion Detection, Perimeter Protection and Closed Circuit television equipment. ",
  },
  {
    img: "/images/services/firefighting/firefighting-4.png",
    title: "FIRE FIGHTING3",
    description:
      "AWA, provides intruder detection systems for Commercial or Government Organizations and has many years of Experience in installing and servicing all types of Security Alarm systems. and firefighting all products, prior to being supported by the company, are thoroughly tested by our technicians with regard to their features and in particular, to reliability. AWA, systems range from simple and easy to use general security systems, to some of the most complex system in Australia. The addition of Back-to-Base central monitoring for offices and factories means your premises is always being watched. AWA, also install major systems utilizing various technologies such as Video Motion Detection, Perimeter Protection and Closed Circuit television equipment. ",
  },
  {
    img: "/images/services/firefighting/firefighting-5.png",
    title: "FIRE FIGHTING2",
    description:
      "AWA, provides intruder detection systems for Commercial or Government Organizations and has many years of Experience in installing and servicing all types of Security Alarm systems. and firefighting all products, prior to being supported by the company, are thoroughly tested by our technicians with regard to their features and in particular, to reliability. AWA, systems range from simple and easy to use general security systems, to some of the most complex system in Australia. The addition of Back-to-Base central monitoring for offices and factories means your premises is always being watched. AWA, also install major systems utilizing various technologies such as Video Motion Detection, Perimeter Protection and Closed Circuit television equipment. ",
  },
];

const Modal = () => {
  const [activeData, setActiveData] = useState(fireFighting[0]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="h-[80vh] items-center w-[80vw] flex   overflow-y-auto ">
        <div className="w-[50%]">
          <img src={activeData.img} alt="" className="w-full" />
          <div className="flex flex-wrap w-[70vw] ">
            {fireFighting.map((obj) => (
              <img
                src={obj.img}
                className={`w-[100px] ${
                  obj.img == activeData.img ? "hidden" : "flex"
                } `}
                onClick={() => setActiveData(obj)}
              />
            ))}
          </div>
        </div>
        <div className="w-[50%]">
          <DialogTitle className="w-full text-[#2D3E6A] text-[24px] uppercase">
            {activeData.title}
          </DialogTitle>
          <DialogDescription className="w-full text-[16px]">
            {activeData.description}
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
