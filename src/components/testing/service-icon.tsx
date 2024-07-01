interface IServicesIcon {
  title: string;
  img: string;
}

const ServicesIcon = ({ img, title }: IServicesIcon) => {
  return (
    <div>
      <div className="flex flex-col items-center text-white">
        <img src={img} className="w-[100px] md:w-[150px]" />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ServicesIcon;
