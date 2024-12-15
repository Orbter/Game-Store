import { useState, useRef } from 'react';

function SmallGame({ imgUrl, gameName, price }) {
  return (
    <div className='flex justify-between p-1 sm:justify-between sm:max-w-[357px] sm:max-h-[200px] rounded-lg cursor-pointer border-2 border-transparent hover:border-gray-400 transition-all duration-250'>
      <div className=''>
        <img
          src={imgUrl}
          className='w-[30vw] h-[35vw] sm:w-[14vw] sm:h-[17vw] sm:max-w-[160px] sm:max-h-[188px] object-cover rounded-xl'
        />
      </div>
      <div className='flex flex-col mt-5 gap-1 ml-2 items-end'>
        <h4 className='poppins text-white text-2xl sm:text-lg text-end'>
          {gameName}
        </h4>
        <p className='inter font-extralight text-lg sm:text-base text-white'>
          {price}
        </p>
      </div>
    </div>
  );
}

export { SmallGame };
