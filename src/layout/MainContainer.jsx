import { MainSlider } from '../components/mainSlider/MainSlider';
import { InformationSlider } from '../components/mainSlider/informationSlider';
import useEmblaCarousel from 'embla-carousel-react';
import mainPhoto from '../assets/main-image.png';

function MainContainer() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const slidesData = [
    {
      title: 'God of War Ragnarok',
      price: '$60',
      image: mainPhoto,
    },
    {
      title: 'Horizon Zero Dawn',
      price: '$40',
      image: mainPhoto,
    },
    {
      title: 'The Last of Us Part II',
      price: '$50',
      image: mainPhoto,
    },
  ];

  return (
    <div
      className="bg-main-blue w-9/12  md:w-10/12 h-[fit-content] cursor-pointer embla "
      ref={emblaRef}
    >
      <div className="embla__container">
        {slidesData.map((slide, index) => (
          <div key={index} className="embla__slide md:flex">
            <div className="w-full md:w-[60vw]">
              <MainSlider image={slide.image} />
            </div>
            <div className="w-full md:w-[40vw]">
              <InformationSlider />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export { MainContainer };
