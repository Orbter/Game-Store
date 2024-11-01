import { useState } from 'react';
import { MainContainer } from '../layout/MainContainer';
import '../style/mainPage.css';
import { getPopularGames } from '../hooks/api/apiData';
function MainPage() {
  getPopularGames();
  return (
    <div className='home-screen h-300vh flex justify-center pt-10'>
      <MainContainer />
    </div>
  );
}

export default MainPage;
