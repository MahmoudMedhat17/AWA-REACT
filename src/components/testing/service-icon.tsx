interface IServicesIcon {
  title: string;
  img: string;
}

const ServicesIcon = ({ img, title }: IServicesIcon) => {
  return (
    <div>
      <img src={img} alt="" />
      <h2>{title}</h2>
    </div>
  );
};

export default ServicesIcon;
