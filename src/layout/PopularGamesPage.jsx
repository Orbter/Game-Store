import { PopularGames } from '../components/gameDisplay/popularGames';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, useCallback } from 'react';
import gamePhoto from '../assets/main-image.png';
import arrow from '../assets/svg/arrow.svg';

function PopularGamesPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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
    <div className='w-[93vw] flex items-center '>
      <button
        className='embla__prev hidden h-[fit-content] md:flex  '
        onClick={scrollPrev}
      >
        <img className='w-24' src={arrow}></img>
      </button>
      <div className='embla mt-4'>
        <div className='embla-viewport' ref={emblaRef}>
          <div className='embla__container'>
            {games.map((bundleGames, index) => (
              <div
                key={index}
                className='embla__slide flex items-center justify-around'
              >
                {bundleGames.map((singleGame, indexSlide) => (
                  <PopularGames gamePhoto={singleGame.img} key={indexSlide} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className='hidden embla__next h-[fit-content] md:flex '
        onClick={scrollNext}
      >
        <img src={arrow} className='rotate-180 w-24'></img>
      </button>
    </div>
  );
}

export { PopularGamesPage };
