import neon from '../assets/neon.png';
import menu from '../assets/svg/menu.svg';
import { Search } from '../components/headerComponents/search';
import { ActionButtons } from '../components/headerComponents/ActionButtons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchGame } from '../hooks/api/searchGames';
function Header() {
  const [searchText, SetSearchText] = useState('');
  const [gamesShow, SetGamesShow] = useState(null);

  useEffect(() => {
    async function fetchGames() {
      try {
        const mainGamesList = await fetchSearchGame(searchText);
        SetGamesShow(mainGamesList.results);
      } catch (error) {
        console.error('Error fetching games bitch:', error);
      }
    }
    fetchGames();
  }, [searchText]);

  return (
    <div className='w-full pr-5 pl-5 header-color h-16 fixed flex items-center inset-0 z-10 justify-between'>
      <div className='flex items-center gap-5'>
        <div className='w-8 cursor-pointer'>
          <img src={menu}></img>
        </div>
        <Link to={'/'}>
          <div className='flex items-center cursor-pointer bebas-neue-regular'>
            <img src={neon} className='w-12'></img>
            <h2 className='text-3xl hidden sm:flex text-white'>Orbter Games</h2>
          </div>
        </Link>
      </div>
      <div className='flex gap-5'>
        <Search
          SetSearchText={SetSearchText}
          searchText={searchText}
          gamesShow={gamesShow}
        />
        <ActionButtons />
      </div>
    </div>
  );
}

export { Header };
