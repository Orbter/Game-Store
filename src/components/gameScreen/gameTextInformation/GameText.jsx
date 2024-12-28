function GameText({ game }) {
  let developer = 'indie';

  if (game.developers[0] !== undefined) developer = game.developers[0].name;
  return (
    <div className=' flex flex-col '>
      <div className='flex justify-between items-center'>
        <h3>Genre</h3>
        <p className='text-sm'>
          {game?.genres?.map((genre, index) => (
            <span key={index}>
              {genre.name} {index < game.genres.length - 1 && ', '}
            </span>
          ))}
        </p>
      </div>
      <div className='w-full h-[1px] bg-gray-600 mb-1'></div>
      <div className='flex justify-between items-center'>
        <h3>Developer</h3>
        <p className='text-sm'>{developer}</p>
      </div>
      <div className='w-full h-[1px] bg-gray-600 mb-1'></div>

      <div className='flex justify-between items-center'>
        <h3>Publisher</h3>
        <p className='text-sm'>{game.genres[0].name}</p>
      </div>
      <div className='w-full h-[1px] bg-gray-600 mb-1'></div>

      <div className='flex justify-between items-center'>
        <h3>Release</h3>
        <p className='text-sm'>{game.released}</p>
      </div>
      <div className='w-full h-[1px] bg-gray-600 mb-1'></div>

      <div className='flex justify-between items-center'>
        <h3>Platform</h3>
        <p className='text-sm flex justify-end flex-wrap gap-1'>
          {game?.parent_platforms?.map((parentPlatform, index) => (
            <span key={index}>
              {parentPlatform.platform.name}
              {index < game.parent_platforms.length - 1 && ','}
            </span>
          ))}
        </p>
      </div>
      <div className='w-full h-[1px] bg-gray-600 mb-1'></div>
    </div>
  );
}
export { GameText };
