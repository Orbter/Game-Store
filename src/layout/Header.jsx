import neon from '../assets/neon.png';
import menu from '../assets/svg/menu.svg';
import { Search } from '../components/headerComponents/search';
import { ActionButtons } from '../components/headerComponents/ActionButtons';
function Header() {
  return (
    <div className="w-full header-color h-16 fixed flex items-center inset-0 z-10">
      <div className="w-8">
        <img src={menu}></img>
      </div>
      <div className="flex items-center bebas-neue-regular">
        <img src={neon} className="w-12"></img>
        <h2 className="text-3xl text-white">Orbter Games</h2>
      </div>
      <Search />
      <ActionButtons />
    </div>
  );
}

export { Header };
