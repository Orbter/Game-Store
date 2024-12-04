import arrow from '../../assets/svg/littleArrow.svg';
import { SmallGame } from '../gameDisplay/SmallGame';
function PopularCategories({ category, threeGames, last }) {
  return (
    <div
      className={
        last
          ? 'flex flex-col p-1 w-[31vw]'
          : 'flex flex-col p-1 w-[31vw] border-r border-gray-400 border-opacity-65'
      }
    >
      <div className='flex justify-around w-[25vw] mb-6'>
        <h2 className='inter text-white text-3xl text-wrap text-center'>
          {category}
        </h2>
        <img src={arrow}></img>
      </div>
      <div className='flex flex-col justify-between gap-8'>
        {threeGames.map((game, index) => (
          <SmallGame
            imgUrl={game.url}
            gameName={game.name}
            price={game.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
export { PopularCategories };
