import { calculatingPrice } from '../categoriesCaculation/calculatingPrice';

function mainSliderObj(gamesArray) {
  try {
    const informationArray = gamesArray.results.map((game, index) => ({
      gameName: game.name,
      imgUrl: game.background_image,
      genres: game.genres,
      screenShots: game.short_screenshots[2].image,
      price: calculatingPrice(),
    }));
    return informationArray;
  } catch (error) {
    console.error('Error processing games api:', error);
    return [];
  }
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

function bigGamesCurrentObj(gamesArray) {
  const informationArray = gamesArray.results.map((game) => ({
    gameName: game.name,
    imgUrl: game.background_image,
    platforms: game.platforms,
  }));
  return informationArray;
}

export { popularGamesObj2023, mainSliderObj, bigGamesCurrentObj };
