import { calculatingPrice } from '../../utils/categoriesCaculation/calculatingPrice';
import PropTypes from 'prop-types';

function GamesInCategories({ game, categoriesName }) {
  const metaScore = game.metacritic === null ? 'X' : game.metacritic;
  const release = game.released === null ? 'Pre-Order' : game.released;
  const price = calculatingPrice();
  const allTags = game.tags;
  const tag = allTags[0] === undefined ? categoriesName : allTags[0].name;
  return (
    <div className='rounded bg-semiBlue w-[40vw] sm:w-[30vw] md:w-[28vw] md:h-[20vw] md:min-h-80 inter cursor-pointer  2xl:w-[20vw]'>
      <div className='w-[40vw] h-32 sm:w-[30vw] md:w-[28vw] md:h-48 2xl:w-[20vw] 2xl:h-[12vw] '>
        <img
          src={game.background_image}
          className='w-full h-full object-cover rounded-t-md '
        ></img>
      </div>

      <div className='p-3 '>
        <div className='flex'>
          <h1 className='w-full text-sm md:text-base 2xl:text-2xl open-sans font-bold'>
            {game.name}
          </h1>
          <div
            className={`flex items-center justify-center size-9 text-lg font-semibold poppins p-2 rounded-sm ${
              game.metacritic >= 90
                ? ' bg-amazingScore'
                : game.metacritic >= 75
                ? ' bg-goodScore'
                : game.metacritic === null
                ? ' bg-[#9BA6AA]'
                : ' bg-badScore'
            }`}
          >
            <p>{metaScore}</p>
          </div>
        </div>
        <div className='flex justify-between items-center text-xs md:text-base '>
          <div className='flex flex-col'>
            <p className='text-gray-600'>{tag}</p>
            <p className='text-gray-600'>{release}</p>
          </div>
          <div>
            <p>{`$${price}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

GamesInCategories.propTypes = {
  game: PropTypes.shape({
    metacritic: PropTypes.number,
    released: PropTypes.string,
    background_image: PropTypes.string,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ),
  }),
};

export { GamesInCategories };
