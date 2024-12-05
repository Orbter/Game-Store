function BigGames({ imgSrc, gameName, gameText }) {
  return (
    <div className='flex flex-col justify-between w-[80vw] sm:w-[28vw] items-end max-w-[330px] max-h-[370px] '>
      <div className='w-full h-[80%] cursor-pointer flex flex-col justify-around transform hover:scale-110 transition duration-300 mb-7'>
        <div className='w-full h-[70%] transform '>
          <img
            src={imgSrc}
            className='w-full h-full object-cover rounded-md'
          ></img>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-white semi-headers mb-1 mt-1 text-2xl'>
            {gameName}
          </h3>
          <p className='text-gray-500 price text-lg'>{gameText}</p>
        </div>
      </div>
      <button className='bg-blue-600 rounded inter w-28 p-2 sm:w-fit sm:p-1.5 font-medium text-base transform hover:scale-110 transition duration-300'>
        Add To Cart
      </button>
    </div>
  );
}

export { BigGames };
