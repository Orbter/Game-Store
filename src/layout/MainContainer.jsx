import { MainSlider } from '../components/mainSlider/MainSlider';
import { InformationSlider } from '../components/mainSlider/informationSlider';
import useEmblaCarousel from 'embla-carousel-react';
import mainPhoto from '../assets/main-image.png';
import { useCallback } from 'react';
import arrow from '../assets/svg/arrow.svg';

function MainContainer() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  function cheking() {}
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
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='w-full flex justify-center h-[fit-content] items-center mt-36'>
      <button
        className='embla__prev hidden h-[fit-content] md:flex md:mr-5'
        onClick={scrollPrev}
      >
        <img src={arrow}></img>
      </button>
      <div className='bg-main-blue w-9/12  md:w-10/12 h-[fit-content] cursor-pointer embla '>
        <div className='embla-viewport' onClick={cheking} ref={emblaRef}>
          <div className='embla__container'>
            {slidesData.map((slide, index) => (
              <div key={index} className='embla__slide md:flex'>
                <div className='w-full md:w-[60vw]'>
                  <MainSlider image={slide.image} />
                </div>
                <div className='w-full md:w-[40vw]'>
                  <InformationSlider />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className='hidden embla__next h-[fit-content] md:flex md:ml-5'
        onClick={scrollNext}
      >
        <img src={arrow} className='rotate-180'></img>
      </button>
    </div>
  );
}
export { MainContainer };
