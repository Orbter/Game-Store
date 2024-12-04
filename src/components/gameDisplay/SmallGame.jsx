import { useState, useRef } from 'react';

function SmallGame({ imgUrl, gameName, price }) {
  return (
    <div className='flex justify-around'>
      <div className=''>
        <img
          src={imgUrl}
          className='w-[14vw] h-[17vw] object-cover rounded-xl'
        />
      </div>
      <div className='flex flex-col mt-5 gap-1 ml-2 items-end'>
        <h4 className='poppins text-white text-lg'>{gameName}</h4>
        <p className='inter font-extralight text-white'>{price}</p>
      </div>
    </div>
  );
}

export { SmallGame };
