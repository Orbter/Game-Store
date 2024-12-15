import { PopularCategories } from '../components/categories/PopularCategories';
import mainPhoto from '../assets/main-image.png';
import { useEffect, useState } from 'react';
import {
  fetchNextMonthGames,
  fetchAllTimeSellers,
  fetchNewAndTrending,
} from '../hooks/api/apiData';
import { smallGamesObj } from '../utils/objCreators/mainGamesObj';
function PopularChoosing() {
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [trendingGames, setTrendingGames] = useState([]);
  const [topGames, setTopGames] = useState([]);
  useEffect(() => {
    async function fetchGames() {
      try {
        const upcoming = await fetchNextMonthGames();
        const trending = await fetchNewAndTrending();
        const topSellers = await fetchAllTimeSellers();
        const upcomingObj = smallGamesObj(upcoming);
        const trendingObj = smallGamesObj(trending);
        const lastThreeItems = trendingObj.slice(7, 10);
        const topSellersObj = smallGamesObj(topSellers);

        setUpcomingGames(upcomingObj);
        setTrendingGames(lastThreeItems);
        setTopGames(topSellersObj);
      } catch (error) {
        console.log('error fetching the games:', error);
      }
    }
    fetchGames();
  }, []);

  const games = [
    { name: 'god of war', url: mainPhoto, price: '$100' },
    { name: 'god of war', url: mainPhoto, price: '$100' },
    { name: 'god of war', url: mainPhoto, price: '$100' },
  ];
  return (
    <div className='flex flex-col sm:flex-row w-[93vw] items-center justify-center gap-7 sm:gap-0'>
      <PopularCategories
        category='Popular Upcoming'
        threeGames={upcomingGames}
        last={false}
      />
      <PopularCategories
        category='New and trending'
        threeGames={trendingGames}
        last={false}
      />
      <PopularCategories
        category='All Time Top Sellers'
        threeGames={topGames}
        last={true}
      />
    </div>
  );
}
export { PopularChoosing };
