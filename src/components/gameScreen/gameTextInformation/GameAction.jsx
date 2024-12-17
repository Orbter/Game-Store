function GameAction({ game, gameObj }) {
  const calculateScoreBg = () => {
    return game.metacritic >= 90
      ? '#F2C203'
      : game.metacritic >= 75
      ? '#2F7CE9'
      : '#AA062A';
  };
  const colorBg = calculateScoreBg();
  return (
    <div>
      <div>
        <div>
          <h3>MetaScore:</h3>
          <div className={`flex items-center justify-center bg-[${colorBg}]`}>
            <p>{game.metacritic}</p>
          </div>
        </div>
        <div>
          <h3>{gameObj.price}</h3>
        </div>
      </div>
      <div>
        <button className='bg-[#26BBFF]'>Add To Cart</button>
        <button className='bg-[#9BA6AA]'>Add To Favorite</button>
      </div>
    </div>
  );
}
export { GameAction };
