import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';

const getPopularGamesMain = async () => {
  const apiKey = import.meta.env.VITE_RAWG_API;
  const today = new Date().toISOString().split('T')[0];
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${apiKey}&dates=${thirtyDaysAgo},${today}&ordering=-popularity&page_size=5`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Api Error could not get the games:', error);
    throw error;
  }
};

const getPopularGames2023 = async () => {
  const apiKey = import.meta.env.VITE_RAWG_API;
  const currentYear = new Date().getFullYear();
  const lastYear = String(currentYear - 1);

  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${apiKey}&dates=${lastYear}-01-01,${lastYear}-12-31&ordering=-added&page_size=12`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const bestOfTheYear = async () => {
  const apiKey = import.meta.env.VITE_RAWG_API;
  const currentYear = new Date().getFullYear();
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${apiKey}&dates=${currentYear}-01-01,${currentYear}-12-31&page_size=3`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
export { getPopularGamesMain, getPopularGames2023, bestOfTheYear };
