import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';

const getPopularGamesMain = () => {
  const apiKey = import.meta.env.VITE_RAWG_API;
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
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
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
    console.log(data);

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

async function getSteamAppId(gameName) {
  const response = await fetch(
    'https://api.steampowered.com/ISteamApps/GetAppList/v2/',
  );
  const data = await response.json();
  const apps = data.applist.apps;

  // Normalize the game name for comparison
  const normalizedGameName = gameName.trim().toLowerCase();

  // Search for the game in the app list
  const app = apps.find(
    (app) => app.name.trim().toLowerCase() === normalizedGameName,
  );

  if (app) {
    return app.appid;
  } else {
    throw new Error(`Game "${gameName}" not found in the Steam app list.`);
  }
}

const fetchGameSteamAppId = async (gameName) => {
  const appId = await getSteamAppId(gameName);
  fetch(`https://store.steampowered.com/api/appdetails?appids=${appId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
};

function PriceGames() {}

export { getPopularGamesMain, fetchGameSteamAppId, getPopularGames2023 };

//https://store.steampowered.com/api/appdetails?appids=1091500
