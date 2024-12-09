import { PopularGames } from '../components/gameDisplay/popularGames';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, useCallback } from 'react';
import gamePhoto from '../assets/main-image.png';
import arrow from '../assets/svg/arrow.svg';
import fire from '../assets/svg/fire.svg';
function PopularGamesPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // needs to adds onselect?
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const games = [
    [
      { name: 'god of war', img: gamePhoto, url: '/' },
      { name: 'god of war', img: gamePhoto, url: '/' },
      { name: 'god of war', img: gamePhoto, url: '/' },
    ],
    [
      { name: 'god of war', img: gamePhoto, url: '/' },
      { name: 'god of war', img: gamePhoto, url: '/' },
      { name: 'god of war', img: gamePhoto, url: '/' },
    ],
    [
      { name: 'god of war', img: gamePhoto, url: '/' },
      { name: 'god of war', img: gamePhoto, url: '/' },
      { name: 'god of war', img: gamePhoto, url: '/' },
    ],
  ];
  return (
    <div className='flex flex-col mb-20 items-center'>
      <div className='mb-5 '>
        <div className='flex items-center cursor-pointer w-fit  sm:ml-[5vw] xl:ml-16 firstDiv'>
          <div className='relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full blurRound'>
            <img
              src={fire}
              className='w-10 sm:w-12 sm:h-12'
              alt='Category Icon '
            />
          </div>
          <h1 className='text-white poppins m-0 text-xl sm:text-3xl'>
            Popular Games
          </h1>
        </div>
        <div className='w-[93vw] flex items-center max-w-[1100px]'>
          <button
            className='embla__prev hidden w-[31px] flex-shrink-0 md:flex  '
            onClick={scrollPrev}
          >
            <img className='w-24' src={arrow}></img>
          </button>
          <div className='embla mt-2 pt-5'>
            <div className='embla-viewport' ref={emblaRef}>
              <div className='embla__container'>
                {games.map((bundleGames, index) => (
                  <div
                    key={index}
                    className='embla__slide flex items-center justify-around'
                  >
                    {bundleGames.map((singleGame, indexSlide) => (
                      <PopularGames
                        gamePhoto={singleGame.img}
                        key={indexSlide}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className='embla__prev hidden w-[31px] flex-shrink-0 md:flex '
            onClick={scrollNext}
          >
            <img src={arrow} className='rotate-180 w-24'></img>
          </button>
        </div>
      </div>
      <div className='flex gap-5'>
        {games.map((_, index) => (
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

export { PopularGamesPage };
