import value1 from "../../public/images/Value-1.png";
import value2 from "../../public/images/Value-2.png";
import value3 from "../../public/images/Value-3.png";
import value4 from "../../public/images/Value-4.png";
import value5 from "../../public/images/Value-5.png";

interface ImagesData {
  id: number;
  imageUrl: string;
}

const OurValues = () => {
  const ImgsData: ImagesData[] = [
    {
      id: 1,
      imageUrl: value1,
    },
    {
      id: 2,
      imageUrl: value2,
    },
    {
      id: 3,
      imageUrl: value3,
    },
    {
      id: 4,
      imageUrl: value4,
    },
    {
      id: 5,
      imageUrl: value5,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-[2rem]">
      <div>
        <h2 className="text-[24px] sm:text-[40px] font-medium mb-[1rem]">
          Our Values
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        {ImgsData.map((images) => (
          <div
            key={images.id}
            className={`${
              images.id === 5 ? "mb-[4rem]" : "mb-[1rem]"
            } xl:even:ml-[12rem]`}
          >
            <img src={images.imageUrl} className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
