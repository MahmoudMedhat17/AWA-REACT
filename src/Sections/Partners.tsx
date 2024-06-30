import almatic from "/public/images/partners/almatic.jpg";
import american from "/public/images/partners/american-dynamics.jpg";
import ansul from "/public/images/partners/ansul.jpg";
import axis from "/public/images/partners/axis.jpg";
import chemguard from "/public/images/partners/chemguard.jpg";
import clavai from "/public/images/partners/clavai.jpg";
import edwards from "/public/images/partners/edwards.jpg";
import faac from "/public/images/partners/faac.jpg";
import hochiki from "/public/images/partners/hochiki.jpg";
import hygood from "/public/images/partners/hygood.jpg";
import kidde from "/public/images/partners/kidde.jpg";
import mueller from "/public/images/partners/mueller.jpg";
import nmfire from "/public/images/partners/nmfire.jpg";
import notifier from "/public/images/partners/notifier.jpg";
import pentair from "/public/images/partners/pentair.jpg";
import toa from "/public/images/partners/toa.jpg";
import tyco from "/public/images/partners/tyco.jpg";
import vikins from "/public/images/partners/vikins.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Ipartners {
  id: number;
  imageUrl: string;
}

const Partners = () => {
  const partnerLogos: Ipartners[] = [
    {
      id: 1,
      imageUrl: almatic,
    },
    {
      id: 2,
      imageUrl: american,
    },
    {
      id: 3,
      imageUrl: ansul,
    },
    {
      id: 4,
      imageUrl: axis,
    },
    {
      id: 5,
      imageUrl: chemguard,
    },
    {
      id: 6,
      imageUrl: clavai,
    },
    {
      id: 7,
      imageUrl: edwards,
    },
    {
      id: 8,
      imageUrl: faac,
    },
    {
      id: 9,
      imageUrl: hochiki,
    },
    {
      id: 10,
      imageUrl: hygood,
    },
    {
      id: 11,
      imageUrl: kidde,
    },
    {
      id: 12,
      imageUrl: mueller,
    },
    {
      id: 13,
      imageUrl: nmfire,
    },
    {
      id: 14,
      imageUrl: notifier,
    },
    {
      id: 15,
      imageUrl: pentair,
    },
    {
      id: 16,
      imageUrl: toa,
    },
    {
      id: 17,
      imageUrl: tyco,
    },
    {
      id: 18,
      imageUrl: vikins,
    },
  ];

  return (
    <div className="py-8 bg-white flex flex-col justify-center items-center">
      <div>
        <h2 className="text-[#2D3E6A] text-[24px] sm:text-[40px] font-medium">
          SOME OF OUR PARTNERS
        </h2>
      </div>
      <div className="py-20 px-8">
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

export default Partners;
