import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

function Categories() {
  const allCategories = [{ title: 'action',class:'red-background',img: }];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div className="embla">
        <div className="embla-viewport">
          <div className="embla__container"></div>
        </div>
      </div>
    </div>
  );
}
