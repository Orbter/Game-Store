import { calculatingPrice } from '../categoriesCaculation/calculatingPrice';

function mainSliderObj(gamesArray) {
  const informationArray = [];
  gamesArray.result.map((game, index) => {
    const obj = {
      gameName: game.name,
      imgUrl: game.background_image,
      screenShot: game.short_screenshots[0],
      price: calculatingPrice(),
      genres: game.genres,
    };
  });
}

async function popularGamesObj2023(gamesArrayPromise) {
  try {
    const games = await gamesArrayPromise;
    const arrangeArray = [];
    const informationArray = games.results.map((game, index) => ({
      gameName: game.name,
      imgUrl: game.background_image,
      gameId: game.id,
    }));
    for (let index = 0; index < 4; index++) {
      const newArray = [];
      for (let index = 0; index < 3; index++) {
        const item = informationArray.pop();
        newArray.push(item);
      }
      arrangeArray.push(newArray);
    }
    return arrangeArray;
  } catch (error) {
    console.error('Error processing games array:', error);
    return [];
  }
}

export { popularGamesObj2023, mainSliderObj };
