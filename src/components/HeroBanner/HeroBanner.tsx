import AwaCol from "./AwaCol";

interface IHeroBanner {
  imgUrl: string;
}

const HeroBanner = ({ imgUrl }: IHeroBanner) => {
  return (
    <div
      className="w-[100%] h-[100vh] bg-center bg-custom-size"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.116), transparent 100%),url(${imgUrl})`,
      }}
    >
      <div className="flex flex-col justify-center items-center h-[100%] py-[2.5rem]">
        <AwaCol />
      </div>
    </div>
  );
};

export default HeroBanner;
