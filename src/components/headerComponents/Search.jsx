import searchIcon from '../../assets/svg/search-icon.svg';
import closeIcon from '../../assets/svg/close.svg';
import { useState, useRef } from 'react';

function Search() {
  const [isPressed, setIsPressed] = useState(false);
  const openSearch = () => {
    if (!isPressed) {
      setIsPressed(true);
    }
  };
  const closeSearch = () => {
    if (isPressed) {
      setIsPressed(false);
    }
  };

  return (
    <>
      {!isPressed ? (
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
      ) : (
        <div className="flex flex-col fixed z-20 top-0 left-0">
          <div className="z-30 header-color h-16 w-[98vw] fixed"></div>

          <div className="flex w-[98vw] items-center relative z-40 h-16 justify-center">
            <div className="flex w-[90vw] bg-customGray pl-3 pr-3 items-center">
              <img
                src={searchIcon}
                className="w-[20px] sm:w-[25px]  left-12 lg:left-16"
                alt="Search Icon"
              ></img>

              <input
                type="text"
                placeholder="Search Store"
                className="search outline-none  pl-3 right-4 w-[85vw] h-16 bg-customGray text-white text-md sm:text-lg flex items-center gap-5"
              ></input>
              <img
                src={closeIcon}
                className="w-[15px] sm:w-[20px] cursor-pointer"
                onClick={closeSearch}
              ></img>
            </div>
          </div>
          <div
            className="h-[100vh] bg-[#12121299] bg-opacity-60 cursor-pointer"
            onClick={closeSearch}
          ></div>
        </div>
      )}
    </>
  );
}

export { Search };
