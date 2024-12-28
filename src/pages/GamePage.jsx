import { PhotoCarousel } from '../components/gameScreen/PhotoCarousel';
import { useEffect, useState } from 'react';
import { Header } from '../layout/header';
import { CartContext } from '../CartProvider';
import {
  fetchGame,
  fetchScreenshots,
  fetchGameSlug,
} from '../hooks/api/searchGames';
import { GameInformation } from '../components/gameScreen/gameInformation';
import { useParams } from 'react-router-dom';
import { gameObj } from '../utils/objCreators/gameObj';
import { LoadScreen } from '../layout/LoadScreen';
import { CartGame } from '../components/cart/CartGame';
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
    <div className='home-screen h-fit min-h-screen text-white flex flex-col items-center'>
      <Header />
      {!gameInformation ? (
        <LoadScreen />
      ) : (
        <>
          <div className='m-3 mb-10 mt-24 flex flex-col gap-5 max-w-[1520px]'>
            <h1 className='inter text-4xl md:text-6xl font-semibold flex'>
              {gameInformation.name}
            </h1>
            <div className='flex gap-10 md:h-[700px] object-fill flex-col md:flex-row'>
              <PhotoCarousel photos={gamePhotos} />
              <GameInformation game={gameInformation} gameObj={gameObjValue} />
            </div>
          </div>
          <div className='md:w-[100vw] flex justify-center max-w-[1520px]'>
            <p className='open-sans md:text-lg w-[90vw] '>
              {gameInformation.description_raw}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
export default GamePage;
