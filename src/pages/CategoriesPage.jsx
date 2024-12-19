import { useParams } from 'react-router-dom';
import { Header } from '../layout/header';
import { useEffect, useState } from 'react';
import { GamesInCategories } from '../components/categories/gamesInCategories';
function CategoryPage() {
  const { categoriesName } = useParams();
  const [categoryInformation, setCategoryInformation] = useState(null);

  useEffect(() => {}, [categoriesName]);
  return (
    <div className='home-screen h-fit min-h-screen text-white flex flex-col '>
      <Header />
      {!categoryInformation ? (
        <div className='mt-24'>Loading...</div>
      ) : (
        <div>
          <div className='mt-24'>
            <h1>{categoriesName}</h1>
            <div>
              {categoryInformation.map((gameInfo, index) => {
                <GamesInCategories game={gameInfo} key={index} />;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default CategoryPage;
