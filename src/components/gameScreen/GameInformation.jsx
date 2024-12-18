import { GameText } from './gameTextInformation/GameText';
import { GameAction } from './gameTextInformation/GameAction';
function GameInformation({ game, gameObj }) {
  return (
    <div className='flex flex-col w-3/12 open-sans gap-5'>
      <GameText game={game} />
      <GameAction game={game} gameObj={gameObj} />
    </div>
  );
}
export { GameInformation };
