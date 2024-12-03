import gamePhoto from '../assets/main-image.png';
import { BigGames } from '../components/gameDisplay/bigGames';

function BigGamesPage() {
  const games = [
    {
      name: 'god of war',
      img: gamePhoto,
      url: '/',
      text: ' Explore beautiful and historic Britain in a shared open world.',
    },
    {
      name: 'god of war',
      img: gamePhoto,
      url: '/',
      text: ' Explore beautiful and historic Britain in a shared open world.',
    },
    {
      name: 'god of war',
      img: gamePhoto,
      url: '/',
      text: ' Explore beautiful and historic Britain in a shared open world.',
    },
  ];

  return (
    <div className='flex justify-between w-[93vw]'>
      {games.map((game, index) => (
        <BigGames
          imgSrc={game.img}
          gameName={game.name}
          gameText={game.text}
          key={index}
        />
      ))}
    </div>
  );
}

export { BigGamesPage };
