function CartGame({ game }) {
  return (
    <div className='bg-semiBlue rounded p-5 font-bold inter flex flex-col gap-2 sm:flex-row cursor-pointer'>
      <div className='flex flex-col gap-2 sm:flex-row sm:w-[70%] sm:gap-10 '>
        <div className='sm:w-[70%]'>
          <img
            src={game.background_image}
            className='rounded-lg w-full h-fulls '
          ></img>
        </div>
        <div className='flex flex-col sm: justify-center  sm:w-fit'>
          <h2 className='text-xl text-nowrap md:text-2xl'>{game.name}</h2>
          <div>
            <p className='text-gray-500 text-xs'>{game.genre}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-between sm:flex-col sm:items-end sm:w-[30%]'>
        <p className='h-full flex sm:items-center md:text-xl'>
          {' '}
          {`$${game.price}`}
        </p>
        <div className='flex text-gray-500 gap-5 font-bold text-sm sm:text-end'>
          <p className='cursor-pointer hover:text-gray-400'>Remove</p>
          <p className='cursor-pointer hover:text-gray-400'>Add too liked</p>
        </div>
      </div>
    </div>
  );
}
export { CartGame };
