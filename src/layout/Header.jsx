import neon from '../assets/neon.png';
import menu from '../assets/svg/menu.svg';
import { Search } from '../components/headerComponents/search';
import { ActionButtons } from '../components/headerComponents/ActionButtons';
function Header() {
  return (
    <div className='w-full pr-5 pl-5 header-color h-16 fixed flex items-center inset-0 z-10 justify-between'>
      <div className='flex items-center gap-5'>
        <div className='w-8 cursor-pointer'>
          <img src={menu}></img>
        </div>
        <div className='flex items-center cursor-pointer bebas-neue-regular'>
          <img src={neon} className='w-12'></img>
          <h2 className='text-3xl hidden sm:flex text-white'>Orbter Games</h2>
        </div>
      </div>
      <div className='flex gap-5'>
        <Search />
        <ActionButtons />
      </div>
    </div>
  );
}

export { Header };
