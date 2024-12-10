import { fetchGameSteamAppId } from '../../hooks/api/apiData';

async function calculatingPrice(gameName) {
  const game = await fetchGameSteamAppId(gameName);
  const price = game.data.price_overview.final_formatted;
  return price;
}
export { calculatingPrice };
