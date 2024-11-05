import { useState } from 'react';
import { MainContainer } from '../layout/MainContainer';
import '../style/mainPage.css';
import { getPopularGames } from '../hooks/api/apiData';
import { Header } from '../layout/header';
function MainPage() {
  getPopularGames();
  return (
    <div className='home-screen h-300vh flex items-center flex-col relative'>
      <Header />
      <MainContainer />
    </div>
  );
}

export default MainPage;
