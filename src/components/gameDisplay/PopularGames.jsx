function PopularGames({ gamePhoto }) {
  return (
    <div className=' border border-transparent w-[26vw] h-[32vw] cursor-pointer'>
      <img src={gamePhoto} className='w-full h-full object-cover rounded'></img>
    </div>
  );
}

export { PopularGames };
