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
      className="bg-main-blue w-9/12 min-h-[550px] h-100vw cursor-pointer flex-col embla"
      ref={emblaRef}
    >
      <div className="embla__container">
        {slidesData.map((slide, index) => (
          <div key={index} className="embla__slide">
            <div className="w-full">
              <MainSlider image={slide.image} />
            </div>
            <div className="w-full">
              <InformationSlider />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export { MainContainer };
