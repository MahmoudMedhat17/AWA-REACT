import HeroBanner from "@/components/HeroBanner/HeroBanner";
import AwaRow from "@/components/HeroBanner/AwaRow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface IAwaData {
  id: number;
  imageUrl: string;
}

const Home = () => {
  const AwaData: IAwaData[] = [
    {
      id: 1,
      imageUrl: "/images/BannerImgs/143.png",
    },
    {
      id: 2,
      imageUrl: "/images/BannerImgs/144.png",
    },
    {
      id: 3,
      imageUrl: "/images/BannerImgs/145.png",
    },
    {
      id: 5,
      imageUrl: "/images/BannerImgs/lowcurrentSystem.png",
    },
  ];

  return (
    <div id="home">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        orientation="horizontal"
      >
        <CarouselContent>
          <CarouselItem>
            <AwaRow />
          </CarouselItem>
          {AwaData.map((value) => (
            <CarouselItem>
              <HeroBanner key={value.id} imgUrl={value.imageUrl} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Home;
