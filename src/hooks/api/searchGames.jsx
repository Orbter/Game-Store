const fetchGameSlug = async (name) => {
  const apiKey = import.meta.env.VITE_RAWG_API;
  const url = `https://api.rawg.io/api/games?search=${name}&key=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results[0].slug);
    return data.results[0].slug;
  } catch (error) {
    console.log('Error fetching the actual game:', error);
  }
};

const fetchGame = async (slug) => {
  const apiKey = import.meta.env.VITE_RAWG_API;
  const url = `https://api.rawg.io/api/games/${slug}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    console.log('fetching poding');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching the actual game:', error);
  }
};
const fetchScreenshots = async (slug) => {
  const apiKey = import.meta.env.VITE_RAWG_API;

  const url = `https://api.rawg.io/api/games/${slug}/screenshots?key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching the screenshots:', error);
  }
};

export { fetchGame, fetchScreenshots, fetchGameSlug };
