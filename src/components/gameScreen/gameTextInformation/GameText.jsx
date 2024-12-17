function GameText({ game }) {
  return (
    <div className=' flex flex-col'>
      <div className='flex justify-between items-center'>
        <h3>Genre</h3>
        <p>
          {game?.genres?.map((genre, index) => (
            <span key={index}>
              {genre.name} {index < game.genres.length - 1 && ', '}
            </span>
          ))}
        </p>
      </div>
      <div className='flex justify-between items-center'>
        <h3>Developer</h3>
        <p>{game.developers[0].name}</p>
      </div>
      <div className='flex justify-between items-center'>
        <h3>Publisher</h3>
        <p>{game.genres[0].name}</p>
      </div>
      <div className='flex justify-between items-center'>
        <h3>Release</h3>
        <p>{game.released}</p>
      </div>
      <div className='flex justify-between items-center'>
        <h3>Platform</h3>
        <p>
          {game?.parent_platforms?.map((parentPlatform, index) => (
            <span key={index}>
              {parentPlatform.platform.name}
              {index < game.parent_platforms.length - 1 && ', '}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
export { GameText };
