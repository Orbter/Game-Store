import { GameText } from './gameTextInformation/GameText';
import { GameAction } from './gameTextInformation/GameAction';
function GameInformation({ game, gameObj }) {
  return (
    <div className='flex flex-col'>
      <GameText game={game} />
      <GameAction game={game} gameObj={gameObj} />
    </div>
  );
}
export { GameInformation };
