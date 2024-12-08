import { PopularCategories } from '../components/categories/PopularCategories';
import mainPhoto from '../assets/main-image.png';
function PopularChoosing() {
  const games = [
    { name: 'god of war', url: mainPhoto, price: '$100' },
    { name: 'god of war', url: mainPhoto, price: '$100' },
    { name: 'god of war', url: mainPhoto, price: '$100' },
  ];
  return (
    <div className='flex flex-col sm:flex-row w-[93vw] items-center justify-center gap-7 sm:gap-0'>
      <PopularCategories
        category='Popular Upcoming'
        threeGames={games}
        last={false}
      />
      <PopularCategories
        category='New and trending'
        threeGames={games}
        last={false}
      />
      <PopularCategories
        category='All Time Top Sellers'
        threeGames={games}
        last={true}
      />
    </div>
  );
}
export { PopularChoosing };
