import { calculatingPrice } from '../categoriesCaculation/calculatingPrice';

function gameObj(game) {
  const informationArray = {
    gameName: game.name,
    imgUrl: game.background_image,
    price: calculatingPrice(),
  };
  return informationArray;
}
