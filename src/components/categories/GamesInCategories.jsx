import { calculatingPrice } from '../../utils/categoriesCaculation/calculatingPrice';

function GamesInCategories({ game }) {
  const metaScore = game.metacritic === null ? 'X' : game.metacritic;
  const release = game.released === null ? 'Pre-Order' : game.released;
  const price = calculatingPrice();
  return (
    <div className='rounded bg-semiBlue'>
      <img src={game.background_image} className='w-[100%]'></img>
      <div>
        <div className='flex'>
          <h1>{game.name}</h1>
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
        <div>
          <div className='flex flex-col'>
            <p className='text-gray-600'>{game.tags[0].name}</p>
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
export { GamesInCategories };
