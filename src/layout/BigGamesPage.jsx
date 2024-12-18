import gamePhoto from '../assets/main-image.png';
import { BigGames } from '../components/gameDisplay/bigGames';
import { bestOfTheYear } from '../hooks/api/apiData';

import { useEffect, useState } from 'react';
import { bigGamesCurrentObj } from '../utils/objCreators/mainGamesObj';
import { Link } from 'react-router-dom';
function BigGamesPage() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    async function fetchGames() {
      try {
        const popularGamesRaw = await bestOfTheYear();
        const popularGamesObjs = bigGamesCurrentObj(popularGamesRaw);
        setGames(popularGamesObjs);
      } catch (error) {
        console.error('Error fetching games bitch:', error);
      }
    }
    fetchGames();
  }, []);

  return (
    <div className='flex flex-col items-center gap-16 sm:gap-0 sm:flex-row sm:justify-between w-[93vw] mb-24 max-w-[1100px]'>
      {games.map((game, index) => (
        <Link key={index} to={`/game/${game.gameName}`}>
          <BigGames
            imgSrc={game.imgUrl}
            gameName={game.gameName}
            gameText={game.platforms}
          />
        </Link>
      ))}
    </div>
  );
}

export { BigGamesPage };
