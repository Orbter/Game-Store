import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, useCallback, useMemo } from 'react';
import actionImg from '../assets/categories/action.png';
import adventureImg from '../assets/categories/adventure.png';
import arcadeImg from '../assets/categories/arcade.png';
import cardImg from '../assets/categories/card.png';
import casualImg from '../assets/categories/casual.png';
import familyImg from '../assets/categories/family.png';
import fightingImg from '../assets/categories/fighting.png';
import indieImg from '../assets/categories/indie.png';
import mmoImg from '../assets/categories/mmo.png';
import platformerImg from '../assets/categories/platformer.png';
import puzzleImg from '../assets/categories/puzzle.png';
import racingImg from '../assets/categories/racing.png';
import rpgImg from '../assets/categories/rpg.png';
import shootersImg from '../assets/categories/shooters.png';
import simulationImg from '../assets/categories/simulation.png';
import strategyImg from '../assets/categories/strategy.png';
import arrow from '../assets/svg/arrow.svg';
import category from '../assets/svg/category.svg';

import {
  addingClasses,
  randomSlider,
  changeColors,
} from '../utils/categoriesCaculation/caculationCat';
import { Category } from '../components/categories/Category.jsx';
function AllCategory() {
  const allCategories = [
    { id: 0, title: 'action', img: actionImg },
    { id: 1, title: 'adventure', img: adventureImg },
    { id: 2, title: 'arcade', img: arcadeImg },
    { id: 3, title: 'card', img: cardImg },
    { id: 4, title: 'casual', img: casualImg },
    { id: 5, title: 'family', img: familyImg },
    { id: 6, title: 'fighting', img: fightingImg },
    { id: 7, title: 'indie', img: indieImg },
    { id: 8, title: 'mmoImg', img: mmoImg },
    { id: 9, title: 'platformer', img: platformerImg },
    { id: 10, title: 'racing', img: racingImg },
    { id: 11, title: 'rpg', img: rpgImg },
    { id: 12, title: 'shooter', img: shootersImg },
    { id: 13, title: 'simulation', img: simulationImg },
    { id: 14, title: 'strategy', img: strategyImg },
    { id: 15, title: 'puzzle', img: puzzleImg },
  ];

  const cssClasses = [
    { color: 'red-background', counter: 2 },
    { color: 'yellow-background', counter: 2 },
    { color: 'green-background', counter: 2 },
    { color: 'blue-background', counter: 2 },
    { color: 'purple-background', counter: 2 },
    { color: 'orange-background', counter: 2 },
    { color: 'pink-background ', counter: 2 },
    { color: 'aqua-background', counter: 2 },
  ];
  const categoriesSlide = useMemo(() => {
    const newCategories = addingClasses(allCategories, cssClasses);
    const fixedCategories = changeColors(newCategories);
    console.log(fixedCategories);
    return randomSlider(fixedCategories);
  }, []);
  console.log(categoriesSlide);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='mb-24 max-w-[1100px]'>
      <div className='flex items-center cursor-pointer w-fit ml-[5vw] xl:ml-16 firstDiv'>
        <div className='relative w-20 h-20 flex items-center justify-center rounded-full blurRound'>
          <img src={category} className='w-14 h-14' alt='Category Icon ' />
        </div>
        <h1 className='text-white poppins m-0 text-3xl'>Categories</h1>
      </div>

      <div className='w-[93vw] flex items-center max-w-[1100px]'>
        <button
          className='embla__prev hidden h-[fit-content] md:flex  '
          onClick={scrollPrev}
        >
          <img className='w-24' src={arrow}></img>
        </button>
        <div className='embla mt-4'>
          <div className='embla-viewport' ref={emblaRef}>
            <div className='embla__container'>
              {categoriesSlide.map((bundleCategories, index) => (
                <div
                  key={index}
                  className='embla__slide flex w-[60vw] justify-center gap-4'
                >
                  {bundleCategories.map((singleCategory, indexSlide) => (
                    <Category
                      key={indexSlide}
                      gamesCategoric={singleCategory}
                      index={index}
                    />
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
    </div>
  );
}
export { AllCategory };
