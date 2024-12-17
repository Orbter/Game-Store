import { calculatingPrice } from '../categoriesCaculation/calculatingPrice';

function gameObj(game) {
  let name = '';
  game.esrb_rating === null
    ? (name = 'evreyone')
    : (name = game.esrb_rating.name);
  const informationArray = {
    gameName: game.name,
    imgUrl: game.background_image,
    price: calculatingPrice(),
    age: name,
  };
  return informationArray;
}
export { gameObj };
