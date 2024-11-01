import mainPhoto from '../../assets/main-image.png';
import { TagsCreator } from '../tagsCreator';
function InformationSlider() {
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
    <div className='text-white p-2'>
      <h1 className='semi-headers text-2xl'>god of war ragnarock</h1>
      <div className='w-full flex justify-center pt-6'>
        <img className='w-8/12  object-fill' src={mainPhoto}></img>
      </div>
      <div className='pt-6 flex justify-between pb-2'>
        <h2 className='semi-headers text-xl'>available now!</h2>
        <h3 className='pr-3 price'>$60</h3>
      </div>
      <TagsCreator tagsArray={tagsArray} />
    </div>
  );
}

export { InformationSlider };
