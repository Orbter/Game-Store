import { useParams } from 'react-router-dom';
import { Header } from '../layout/header';
import { useEffect, useState } from 'react';
import { GamesInCategories } from '../components/categories/gamesInCategories';
import { fetchCategoriesGame } from '../hooks/api/apiData';
import { Link } from 'react-router-dom';
import { LoadScreen } from '../layout/LoadScreen';
function CategoryPage() {
  const { categoriesName } = useParams();
  const [categoryInformation, setCategoryInformation] = useState(null);

  useEffect(() => {
    async function getCategories() {
      const categoriesGames = await fetchCategoriesGame(categoriesName);
      console.log(categoriesGames);
      setCategoryInformation(categoriesGames.results);
    }
    getCategories();
  }, [categoriesName]);
  return (
    <div className='home-screen h-fit min-h-[100vh] text-white flex flex-col items-center '>
      <Header />
      {!categoryInformation ? (
        <LoadScreen />
      ) : (
        <div className='pt-24 h-[100%] min-h-[100vh]'>
          <div className='flex flex-col gap-5 '>
            <h1 className='inter text-5xl font-medium ml-5 mb-7'>
              {categoriesName}
            </h1>
            <div className='flex flex-wrap justify-around min-h-[80vh] gap-10'>
              {categoryInformation.map((gameInfo, index) => (
                <Link key={index} to={`/game/${gameInfo.name}`}>
                  <GamesInCategories
                    game={gameInfo}
                    categoriesName={categoriesName}
                  />
                </Link>
              ))}
            </div>
            <div className='flex justify-center'>
              <button className='bg-black w-24 h-12 mb-5 rounded-sm'>
                show more
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default CategoryPage;
