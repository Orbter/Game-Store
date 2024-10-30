import { useState } from 'react';
import { MainContainer } from '../layout/MainContainer';
import '../style/mainPage.css';
import { mostPopularTwitch } from '../hooks/api/apiData';
function MainPage() {
  mostPopularTwitch();
  return (
    <div className='home-screen h-300vh'>
      <MainContainer />
    </div>
  );
}

export default MainPage;
