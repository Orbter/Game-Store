import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, useCallback } from 'react';

function PhotoCarousel({ photos }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className='flex flex-col md:w-8/12 h-full cursor-pointer gap-4 justify-start'>
      <div className='embla md:md:h-[700px]'>
        <div className='embla-viewport h-full' ref={emblaRef}>
          <div className='embla__container flex h-full'>
            {photos.results.map((photo, index) => (
              <div key={index} className='embla__slide flex mr-4'>
                <img
                  className='w-full h-full object-cover rounded'
                  src={photo.image}
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex gap-5 justify-center mb-3'>
        {photos.results.map((_, index) => (
          <button
            key={index}
            className={`w-7 h-4 md:w-[3.5vw]  md:h-[2vw] lg:w-8 lg:h-5 rounded-sm ${
              selectedIndex === index ? 'indicator-on' : 'indicator-off'
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export { PhotoCarousel };
