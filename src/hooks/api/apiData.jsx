import { useEffect, useState } from 'react';
import { getPlaying } from './mostPopularApi/getPlaying';
import { getVisits } from './mostPopularApi/getVisits';
import { getWantToPlay } from './mostPopularApi/getWantToPlay';
import { calculatePopular } from './calculatePopularity/calculatePopular';
const apiKey = import.meta.env.VITE_RAWG_API;
// TWITCH API EXAMPLE
// POST: https://id.twitch.tv/oauth2/token?client_id=abcdefg12345&client_secret=hijklmn67890&grant_type=client_credentials

function mostPopularTwitch() {
  const visits = getVisits();
  const wantToPlay = getWantToPlay();
  const playing = getPlaying();

  const popularList = calculatePopular(visits, wantToPlay, playing);
  console.log(popularList);
  return popularList;
}
export { mostPopularTwitch };
// Authorization
