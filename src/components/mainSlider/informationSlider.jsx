import mainPhoto from '../../assets/main-image.png';
import { TagsCreator } from '../tagsCreator';
function InformationSlider({ price }) {
  const tagsArray = [
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
  ];

  return (
    <div className='h-full text-white p-2 flex flex-col justify-evenly'>
      <h1 className='semi-headers text-2xl pb-3'>god of war ragnarock</h1>
      <div className=' hidden md:flex w-full justify-center  pt-602'>
        <img className='w-8/12  object-fill' src={mainPhoto}></img>
      </div>
      <div className='pt-6 flex justify-between pb-2'>
        <h2 className='semi-headers text-xl'>available now!</h2>
        <h3 className='pr-3 price text-lg'>{price}</h3>
      </div>
      <TagsCreator tagsArray={tagsArray} />
    </div>
  );
}

export { InformationSlider };
