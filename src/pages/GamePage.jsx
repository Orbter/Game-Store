import { PhotoCarousel } from '../components/gameScreen/PhotoCarousel';
import { useEffect, useState } from 'react';
import {
  fetchGame,
  fetchScreenshots,
  fetchGameSlug,
} from '../hooks/api/searchGames';
import { GameInformation } from '../components/gameScreen/gameInformation';
import { useParams } from 'react-router-dom';
import { gameObj } from '../utils/objCreators/gameObj';

function GamePage() {
  const { gameName } = useParams();
  const [gameInformation, setGameInformation] = useState(null);
  const [gameObjValue, setGameObjValue] = useState([]);

  const [gamePhotos, setGamePhotos] = useState([]);

  useEffect(() => {
    async function getGameInformation() {
      const gameSlug = await fetchGameSlug(gameName);
      const gameInformationObj = await fetchGame(gameSlug);
      const gameScreenShots = await fetchScreenshots(gameSlug);
      const thisGameObj = gameObj(gameInformationObj);
      setGameInformation(gameInformationObj);
      console.log(gameInformationObj);
      setGamePhotos(gameScreenShots);
      setGameObjValue(thisGameObj);
    }

    getGameInformation();
  }, [gameName]);

  return (
    <div className='home-screen h-fit min-h-screen text-white'>
      {!gameInformation ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 className='inter text-6xl font-semibold'>
            {gameInformation.name}
          </h1>
          <div>
            <PhotoCarousel photos={gamePhotos} />
            <GameInformation game={gameInformation} gameObj={gameObjValue} />
          </div>
          <div>
            <p>{gameInformation.description_raw}</p>
          </div>
        </>
      )}
    </div>
  );
}
export default GamePage;
