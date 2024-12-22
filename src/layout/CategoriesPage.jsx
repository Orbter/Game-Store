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
import { Link } from 'react-router-dom';

import {
  addingClasses,
  randomSlider,
  changeColors,
} from '../utils/categoriesCaculation/caculationCat';
import { Category } from '../components/categories/Category.jsx';
function AllCategory() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  // MMO RPG
  const allCategories = [
    { id: 0, title: 'Action', img: actionImg },
    { id: 1, title: 'Adventure', img: adventureImg },
    { id: 2, title: 'Arcade', img: arcadeImg },
    { id: 3, title: 'Card', img: cardImg },
    { id: 4, title: 'Casual', img: casualImg },
    { id: 5, title: 'Family', img: familyImg },
    { id: 6, title: 'Fighting', img: fightingImg },
    { id: 7, title: 'Indie', img: indieImg },
    { id: 8, title: 'Mmo', img: mmoImg },
    { id: 9, title: 'Platformer', img: platformerImg },
    { id: 10, title: 'Racing', img: racingImg },
    { id: 11, title: 'Rpg', img: rpgImg },
    { id: 12, title: 'Shooter', img: shootersImg },
    { id: 13, title: 'Simulation', img: simulationImg },
    { id: 14, title: 'Strategy', img: strategyImg },
    { id: 15, title: 'Puzzle', img: puzzleImg },
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

    return randomSlider(fixedCategories);
  }, []);
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

  return (
    <div className='flex flex-col items-center mb-12'>
      <div className='mb-10 max-w-[1100px]'>
        <div className='flex items-center cursor-pointer w-fit  sm:ml-[5vw] xl:ml-16 firstDiv'>
          <div className='relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full blurRound'>
            <img
              src={category}
              className='w-10 sm:w-12 sm:h-12'
              alt='Category Icon '
            />
          </div>
          <h1 className='text-white poppins m-0 text-xl sm:text-3xl'>
            Categories
          </h1>
        </div>

        <div className='w-[93vw] flex items-center max-w-[1100px]'>
          <button
            className='embla__prev hidden w-[31px] flex-shrink-0 md:flex   '
            onClick={scrollPrev}
          >
            <img className='w-[31px]' src={arrow}></img>
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
                      <Link
                        key={indexSlide}
                        to={`/categories/${singleCategory.title}`}
                      >
                        <Category
                          gamesCategoric={singleCategory}
                          index={index}
                        />
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className='hidden embla__next w-[31px] justify-end flex-shrink-0 md:flex '
            onClick={scrollNext}
          >
            <img src={arrow} className='rotate-180 w-[31px]'></img>
          </button>
        </div>
      </div>
      <div className='flex gap-5'>
        {categoriesSlide.map((_, index) => (
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
export { AllCategory };
