import { PhotoCarousel } from '../components/gameScreen/PhotoCarousel';
import { useEffect, useState } from 'react';
import { Header } from '../layout/header';
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
      setGamePhotos(gameScreenShots);
      setGameObjValue(thisGameObj);
    }

    getGameInformation();
  }, [gameName]);

  return (
    <div className='home-screen h-fit min-h-screen text-white flex flex-col '>
      <Header />
      {!gameInformation ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className='m-3 mb-10 mt-24 flex flex-col gap-5'>
            <h1 className='inter text-6xl font-semibold flex'>
              {gameInformation.name}
            </h1>
            <div className='flex justify-between'>
              <PhotoCarousel photos={gamePhotos} />
              <GameInformation game={gameInformation} gameObj={gameObjValue} />
            </div>
          </div>
          <div className='w-[100vw] flex justify-center'>
            <p className='open-sans text-lg w-[90vw] '>
              {gameInformation.description_raw}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
export default GamePage;
