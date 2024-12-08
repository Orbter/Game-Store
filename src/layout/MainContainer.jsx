import { MainSlider } from '../components/mainSlider/MainSlider';
import { InformationSlider } from '../components/mainSlider/informationSlider';
import useEmblaCarousel from 'embla-carousel-react';
import mainPhoto from '../assets/main-image.png';
import { useCallback, useEffect, useState } from 'react';
import arrow from '../assets/svg/arrow.svg';
import { getPopularGamesMain } from '../hooks/api/apiData';
import { mainSliderObj } from '../utils/apiInformation/gamesObj.jsx';

function MainContainer() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const slideData = giveGameInformation();
  const slidesData = [
    {
      title: 'God of War Ragnarok',
      price: '$60',
      imageUrl: mainPhoto,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 229926,
        },

        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 34752,
        },

        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3412,
        },

        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 22889,
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 12259,
        },

        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 24493,
        },
      ],
    },
    {
      title: 'Horizon Zero Dawn',
      price: '$40',
      imageUrl: mainPhoto,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 229926,
        },

        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 34752,
        },

        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3412,
        },

        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 22889,
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 12259,
        },

        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 24493,
        },
      ],
    },
    {
      title: 'The Last of Us Part II',
      price: '$50',
      imageUrl: mainPhoto,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 229926,
        },

        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 34752,
        },

        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3412,
        },

        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 22889,
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 12259,
        },

        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 24493,
        },
      ],
    },
  ];
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
    <div className='flex flex-col items-center mb-12 '>
      <div className='w-fit flex justify-center h-[fit-content] items-center mt-36 mb-10 max-w-[1250px]'>
        <button
          className='embla__prev hidden h-[fit-content] md:flex md:mr-5'
          onClick={scrollPrev}
        >
          <img className='w-[31px] h-[43px]' src={arrow}></img>
        </button>
        <div className='bg-main-blue w-9/12 ml-6 mr-6  md:10/12 h-[fit-content] cursor-pointer embla '>
          <div className='embla-viewport' ref={emblaRef}>
            <div className='embla__container gap-8'>
              {slidesData.map((slide, index) => (
                <div key={index} className='embla__slide md:flex '>
                  <div className='w-full md:w-[60%]'>
                    <MainSlider image={slide.imageUrl} />
                  </div>
                  <div className='w-full md:w-[40%]'>
                    <InformationSlider price={slide.price} tags={slide.tags} />
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
          <img src={arrow} className='rotate-180 w-[31px] h-[43px]'></img>
        </button>
      </div>
      <div className='flex gap-5'>
        {slidesData.map((_, index) => (
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
export { MainContainer };
