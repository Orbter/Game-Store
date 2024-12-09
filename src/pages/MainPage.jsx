import { useState } from 'react';
import { MainContainer } from '../layout/MainContainer';
import '../style/mainPage.css';
import { getPopularGamesMain } from '../hooks/api/apiData';
import { Header } from '../layout/header';
import { AllCategory } from '../layout/CategoriesPage.jsx';
import { PopularGamesPage } from '../layout/PopularGamesPage.jsx';
import { BigGamesPage } from '../layout/bigGamesPage.jsx';
import { PopularChoosing } from '../layout/PopularChoosing.jsx';
function MainPage() {
  const mainGames = getPopularGamesMain();
  return (
    <div className='home-screen h-fit pb-16 flex items-center flex-col relative '>
      <Header />
      <MainContainer mainGames={mainGames} />
      <AllCategory />
      <PopularGamesPage />
      <BigGamesPage />
      <PopularChoosing />
    </div>
  );
}

export default MainPage;
