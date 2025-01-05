const fetchGameSlug = async (name) => {
  // const apiKey = import.meta.env.VITE_RAWG_API;
  const url = `https://api.rawg.io/api/games?search=${name}&key=89d5ccd9a80845d9a33e3d1041a4c76b`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results[0].slug;
  } catch (error) {
    console.error('Error fetching the actual game:', error);
  }
};

const fetchGame = async (slug) => {
  // const apiKey = import.meta.env.VITE_RAWG_API;
  const url = `https://api.rawg.io/api/games/${slug}?key=89d5ccd9a80845d9a33e3d1041a4c76b`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching the actual game:', error);
  }
};
const fetchScreenshots = async (slug) => {
  // const apiKey = import.meta.env.VITE_RAWG_API;

  const url = `https://api.rawg.io/api/games/${slug}/screenshots?key=89d5ccd9a80845d9a33e3d1041a4c76b`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching the screenshots:', error);
  }
};

const fetchSearchGame = async (name) => {
  if (name === '') {
    return '';
  } else {
    // const apiKey = import.meta.env.VITE_RAWG_API;
    const url = `https://api.rawg.io/api/games?search=${name}&page_size=4&key=89d5ccd9a80845d9a33e3d1041a4c76b`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching the actual game:', error);
    }
  }
};

export { fetchGame, fetchScreenshots, fetchGameSlug, fetchSearchGame };
