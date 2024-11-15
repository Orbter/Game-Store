import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
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

function Categories() {
  const allCategories = [
    { id: 1, title: 'action', img: actionImg },
    { id: 2, title: 'adventure', img: adventureImg },
    { id: 3, title: 'arcade', img: arcadeImg },
    { id: 4, title: 'card', img: cardImg },
    { id: 5, title: 'casual', img: casualImg },
    { id: 6, title: 'family', img: familyImg },
    { id: 7, title: 'fighting', img: fightingImg },
    { id: 8, title: 'indie', img: indieImg },
    { id: 9, title: 'mmoImg', img: mmoImg },
    { id: 10, title: 'platformer', img: platformerImg },
    { id: 11, title: 'racing', img: racingImg },
    { id: 12, title: 'rpg', img: rpgImg },
    { id: 13, title: 'shooter', img: shootersImg },
    { id: 14, title: 'simulation', img: simulationImg },
    { id: 15, title: 'strategy', img: strategyImg },
    { id: 16, title: 'puzzle', img: puzzleImg },
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

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div className='embla'>
        <div className='embla-viewport'>
          <div className='embla__container'></div>
        </div>
      </div>
    </div>
  );
}
