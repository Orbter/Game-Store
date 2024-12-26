function MiniSearch({ gameImg, gameName }) {
  return (
    <div className='flex justify-between w-[90vw] text-white inter cursor-pointer hover:bg-semiBlueWhite'>
      <div className='w-36 h-24'>
        <img
          src={gameImg}
          className='w-full h-full object-cover rounded-sm'
        ></img>
      </div>
      <div className='flex justify-end'>
        <h3 className='text-end font-semibold'>{gameName}</h3>
      </div>
    </div>
  );
}
export { MiniSearch };
