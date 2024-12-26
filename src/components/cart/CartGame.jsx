function CartGame({ game }) {
  return (
    <div className='bg-semiBlue rounded p-5 max-w-[530px] font-bold inter flex flex-col gap-2 lg:p-4 lg:w-[60vw] lg:h-36 lg:max-w-[950px] lg:flex-row cursor-pointer xl:h-44 '>
      <div className='flex flex-col gap-2 lg:flex-row lg:w-[80%]  lg:gap-10 '>
        <div className='lg:w-[50%]'>
          <img
            src={game.background_image}
            className='rounded-lg w-full h-full '
          ></img>
        </div>
        <div className='flex flex-col lg:justify-center  lg:w-[50%] lg:flex-wrap'>
          <h2 className='text-xl text-nowrap lg:text-wrap sm:text-2xl'>
            {game.name}
          </h2>
          <div>
            <p className='text-gray-500 text-xs'>{game.genre}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-between lg:flex-col lg:items-end lg:w-[30%]'>
        <p className='h-full flex lg:items-center md:text-xl'>
          {' '}
          {`$${game.price}`}
        </p>
        <div className='flex text-gray-500 gap-5 font-bold text-sm lg:text-end'>
          <p className='cursor-pointer hover:text-gray-400'>Remove</p>
          <p className='cursor-pointer hover:text-gray-400'>Add too liked</p>
        </div>
      </div>
    </div>
  );
}
export { CartGame };
