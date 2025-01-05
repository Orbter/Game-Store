const getPopularGamesMain = async () => {
  // const apiKey = import.meta.env.VITE_RAWG_API;
  const today = new Date().toISOString().split('T')[0];
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=89d5ccd9a80845d9a33e3d1041a4c76b&dates=${thirtyDaysAgo},${today}&ordering=-popularity&page_size=5`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
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
  // const apiKey = import.meta.env.VITE_RAWG_API;
  const currentYear = new Date().getFullYear();
  const lastYear = String(currentYear - 1);

  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=89d5ccd9a80845d9a33e3d1041a4c76b&dates=${lastYear}-01-01,${lastYear}-12-31&ordering=-added&page_size=12`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
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
  // const apiKey = import.meta.env.VITE_RAWG_API;
  const currentYear = new Date().getFullYear();
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=89d5ccd9a80845d9a33e3d1041a4c76b&dates=${currentYear}-01-01,${currentYear}-12-31&page_size=3`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
const fetchNextMonthGames = async () => {
  // const apiKey = import.meta.env.VITE_RAWG_API;
  const currentDate = new Date();

  const nextMonthStart = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    1
  );
  const nextMonthEnd = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 2,
    0
  ); // Last day of next month

  const startDate = nextMonthStart.toISOString().split('T')[0];
  const endDate = nextMonthEnd.toISOString().split('T')[0];

  const url = `https://api.rawg.io/api/games?key=89d5ccd9a80845d9a33e3d1041a4c76b&dates=${startDate},${endDate}&page_size=3&ordering=-added`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const fetchAllTimeSellers = async () => {
  const apiKey = import.meta.env.VITE_RAWG_API;
  const url = `https://api.rawg.io/api/games?&page_size=3&ordering=-added&key=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error in trending: ', error);
  }
};
const fetchNewAndTrending = async () => {
  // const apiKey = import.meta.env.VITE_RAWG_API;
  const today = new Date();

  // Calculate the start date (30 days ago)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 30);

  // Calculate the end date (30 days into the future)
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(today.getDate() + 30);

  // Convert dates to ISO format (YYYY-MM-DD)
  const startDate = thirtyDaysAgo.toISOString().split('T')[0];
  const endDate = thirtyDaysFromNow.toISOString().split('T')[0];

  const url = `https://api.rawg.io/api/games?dates=${startDate},${endDate}&ordering=-added&key=89d5ccd9a80845d9a33e3d1041a4c76b`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching new and trending games:', error);
  }
};
const fetchCategoriesGame = async (genre) => {
  // const apiKey = import.meta.env.VITE_RAWG_API;
  const genreLowerCase = genre.toLowerCase();
  const slugGenre =
    genreLowerCase === 'rpg'
      ? 'role-playing-games-rpg'
      : genreLowerCase === 'mmo'
      ? 'massively-multiplayer'
      : genreLowerCase;
  const url = `https://api.rawg.io/api/games?key=89d5ccd9a80845d9a33e3d1041a4c76b&genres=${slugGenre}&page_size=12&ordering=-rating&metacritic=65,100`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching new and trending games:', error);
  }
};

export {
  getPopularGamesMain,
  getPopularGames2023,
  bestOfTheYear,
  fetchNextMonthGames,
  fetchAllTimeSellers,
  fetchNewAndTrending,
  fetchCategoriesGame,
};
