import searchIcon from '../../assets/svg/search-icon.svg';

function Search() {
  return (
    <div className="flex w-[30vw] h-full items-center">
      <div className="search bg-customGray rounded-md w-full flex h-[60%]">
        <img src={searchIcon}></img>
        <p className="text-[#617A83]">Search Store</p>
      </div>
    </div>
  );
}

export { Search };
