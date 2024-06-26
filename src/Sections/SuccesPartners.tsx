import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import aff from "../../public/images/success-partners/aff.jpg";
import als from "../../public/images/success-partners/als.jpg";
import clinart from "../../public/images/success-partners/clinart.jpg";
import cottonil from "../../public/images/success-partners/cottonil.jpg";
import ezzsteel from "../../public/images/success-partners/ezzsteel.jpg";
import gas from "../../public/images/success-partners/gas.jpg";
import gouna from "../../public/images/success-partners/gouna.jpg";
import hometown from "../../public/images/success-partners/hometown.jpg";
import icity from "../../public/images/success-partners/icity.jpg";
import mountainview from "../../public/images/success-partners/mountainview.jpg";
import pepsi from "../../public/images/success-partners/pepsi.jpg";
import unilever from "../../public/images/success-partners/unilever.jpg";
import zetco from "../../public/images/success-partners/zetco.jpg";

interface IpartnerLogos {
  id: number;
  imageUrl: string;
}

const SuccesPartners = () => {
  const partnerLogos: IpartnerLogos[] = [
    {
      id: 1,
      imageUrl: aff,
    },
    {
      id: 2,
      imageUrl: als,
    },
    {
      id: 3,
      imageUrl: clinart,
    },
    {
      id: 4,
      imageUrl: cottonil,
    },
    {
      id: 5,
      imageUrl: ezzsteel,
    },
    {
      id: 6,
      imageUrl: gas,
    },
    {
      id: 7,
      imageUrl: gouna,
    },
    {
      id: 8,
      imageUrl: hometown,
    },
    {
      id: 9,
      imageUrl: icity,
    },
    {
      id: 10,
      imageUrl: mountainview,
    },
    {
      id: 11,
      imageUrl: pepsi,
    },
    {
      id: 12,
      imageUrl: unilever,
    },
    {
      id: 13,
      imageUrl: zetco,
    },
  ];

  return (
    <div className="py-[2rem] bg-white flex flex-col justify-center items-center">
      <div>
        <h2 className="text-[#2D3E6A] text-[24px] sm:text-[40px] font-medium">
          Partners Of Success
        </h2>
      </div>
      <div className="py-[5rem] px-[2rem]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          orientation="horizontal"
        >
          <CarouselContent className="-ml-4">
            {partnerLogos.map((compLogo) => (
              <CarouselItem className=" basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-4 flex items-center">
                <img key={compLogo.id} src={compLogo.imageUrl} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default SuccesPartners;
