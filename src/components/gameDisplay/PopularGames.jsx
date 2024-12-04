function PopularGames({ gamePhoto }) {
  return (
    <div className=' border border-transparent w-[26vw] h-[32vw] max-w-[300px] xl:h-[370px] cursor-pointer mb-4 focused-hover'>
      <img src={gamePhoto} className='w-full h-full object-cover rounded'></img>
    </div>
  );
}

export { PopularGames };
