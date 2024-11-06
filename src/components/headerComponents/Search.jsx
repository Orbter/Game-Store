import searchIcon from '../../assets/svg/search-icon.svg';
import { useState, useRef } from 'react';

function Search() {
  const [isPressed, setIsPressed] = useState(false);
  const openSearch = () => {
    if (!isPressed) {
      setIsPressed(true);
    }
  };

  const ref = useRef(null);

  return (
    <div
      className="flex w-[30vw] h-full items-center relative"
      onClick={openSearch}
    >
      <img
        src={searchIcon}
        className="w-[20px] ml-2 absolute left-0"
        alt="Search Icon"
      ></img>

      <input
        type="text"
        placeholder="Search Store"
        className="search pl-10 rounded-md w-full bg-customGray text-white text-base flex h-9 items-center gap-5"
      ></input>
    </div>
  );
}

export { Search };
