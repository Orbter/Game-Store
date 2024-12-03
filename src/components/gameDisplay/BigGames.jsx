function BigGames({ imgSrc, gameName, gameText }) {
  return (
    <div className='flex flex-col justify-between w-[28vw] items-end'>
      <div className='w-full h-[80%] cursor-pointer flex flex-col justify-around'>
        <div className='w-full h-[70%]'>
          <img
            src={imgSrc}
            className='w-full h-full object-cover rounded-md'
          ></img>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-white semi-headers mb-1 mt-1 text-2xl'>
            {gameName}
          </h3>
          <p className='text-gray-500 price'>{gameText}</p>
        </div>
      </div>
      <button className='bg-blue-600 rounded inter w-fit p-1 font-medium text-base transform hover:scale-110 transition duration-300'>
        Add To Cart
      </button>
    </div>
  );
}

export { BigGames };
