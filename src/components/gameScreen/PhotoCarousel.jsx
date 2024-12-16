import useEmblaCarousel from 'embla-carousel-react';
import { useState } from 'react';

function PhotoCarousel(photos) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className='flex flex-col'>
      <div className='embla mt-4'>
        <div className='embla-viewport' ref={emblaRef}>
          <div className='embla__container'>
            {photos.map((photo, index) => (
              <img key={index} src={photo.image}></img>
            ))}
          </div>
        </div>
      </div>
      <div className='flex gap-5'>
        {photos.map((_, index) => (
          <button
            key={index}
            className={`w-[3.5vw]  h-[2vw] lg:w-8 lg:h-5 rounded-sm ${
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
