import Modal from "@/components/Modal/Modal.tsx";

interface IpopUpContent {
  title: string;
  description: string;
  imageUrls: string[];
}

interface Iprops {
  iconImageUrl: string;
  popUpContent: IpopUpContent;
}

const IconWithPopUp = ({ iconImageUrl, popUpContent }: Iprops) => {
  return (
    <div className="text-white">
      <div className="flex flex-col items-center">
        <img src={iconImageUrl} />
        <p>{popUpContent.title}</p>
      </div>
      {/* <Modal /> */}
      <Modal popUpContent={popUpContent} />
    </div>
  );
};

export default IconWithPopUp;
