import { useEffect, useState } from 'react';

const getPopularGames = () => {
  const apiKey = import.meta.env.VITE_RAWG_API;
  console.log(apiKey);
  const today = new Date().toISOString().split('T')[0];
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  fetch(
    `https://api.rawg.io/api/games?key=${apiKey}&dates=${thirtyDaysAgo},${today}&ordering=-popularity&page_size=5`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then((response) => response.json())
    .then((data) => console.log('Popular Games:', data))
    .catch((error) => console.error('Error:', error));
};

export { getPopularGames };
