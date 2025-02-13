import arrow from '../../assets/svg/littleArrow.svg';
import { SmallGame } from '../gameDisplay/SmallGame';
import { Link } from 'react-router-dom';
function PopularCategories({ category, threeGames, last }) {
  return (
    <div
      className={
        last
          ? 'flex flex-col p-1 w-[80vw] sm:w-[31vw] sm:max-w-[358px]'
          : 'flex flex-col p-1 w-[80vw] sm:w-[31vw] border-b sm:border-r sm:border-b-0 pb-6 border-gray-400 border-opacity-65 sm:max-w-[358px]'
      }
    >
      <div className='flex justify-around sm:w-[25vw] mb-10 sm:mb-6 sm:max-w-[358px] hover-move cursor-default '>
        <h2 className='inter text-white text-3xl text-wrap text-center'>
          {category}
        </h2>
        <img src={arrow} className='arrow-hover'></img>
      </div>

      <div className='flex flex-col justify-between gap-8'>
        {threeGames.map((game, index) => (
          <Link key={index} to={`/game/${game.gameName}`}>
            <SmallGame
              imgUrl={game.imgUrl}
              gameName={game.gameName}
              price={game.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
export { PopularCategories };
