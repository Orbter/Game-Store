import { PhotoCarousel } from '../components/gameScreen/PhotoCarousel';
import { useEffect, useState } from 'react';
import { fetchGame, fetchScreenshots } from '../hooks/api/searchGames';
import { GameInformation } from '../components/gameScreen/gameInformation';
function GamePage(game) {
  const [gameInformation, setGameInformation] = useState([]);
  const [gamePhotos, setGamePhotos] = useState([]);

  useEffect(() => {
    async function getGameInformation() {
      const gameInformationObj = await fetchGame(game.slug);
      const gameScreenShots = await fetchScreenshots(game.slug);
      setGameInformation(gameInformationObj);
      setGamePhotos(gameScreenShots);
    }
    getGameInformation();
  });

  return (
    <div>
      <h1>{gameInformation.name}</h1>
      <div>
        <PhotoCarousel photos={gamePhotos} />
        <GameInformation game={gameInformation} />
      </div>
    </div>
  );
}
