import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../CartProvider';
function GameAction({ game, gameObj }) {
  const metaScore = game.metacritic === null ? 'X' : game.metacritic;
  const cartObjList = useContext(CartContext);
  const { cartList, setCartList } = cartObjList;
  const [price, setPrice] = useState(gameObj.price);
  const [onCart, setOnCart] = useState(false);

  useEffect(() => {
    const gameOnCart = () => {
      return cartList.find((cartGame) => cartGame.name === game.name);
    };
    const isOnCart = gameOnCart();
    if (isOnCart !== undefined) {
      setPrice(isOnCart.price);
      setOnCart(true);
    } else setOnCart(false);
  }, [gameObj.price]);
  function addToCart() {
    if (!onCart) {
      const newObj = {
        ...game,
        price: price,
      };
      setCartList([...cartList, newObj]);
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <div>
        <div className='flex justify-between items-end'>
          <h3 className='text-lg'>MetaScore:</h3>
          <div className='flex justify-between items-end'>
            <div
              className={`flex items-center justify-center size-9 text-lg font-semibold poppins p-2 rounded-sm ${
                game.metacritic >= 90
                  ? ' bg-amazingScore'
                  : game.metacritic >= 75
                  ? ' bg-goodScore'
                  : game.metacritic === null
                  ? ' bg-[#9BA6AA]'
                  : ' bg-badScore'
              }`}
            >
              <p>{metaScore}</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex bg-semiBlue items-center hover:scale-95 md:hover:scale-105 transition duration-150'>
          <h3 className='w-[20%] flex justify-center items-center inter text-lg font-medium'>{`$${price}`}</h3>

          <button
            onClick={() => addToCart()}
            className='bg-[#26BBFF] w-[80%] h-12 rounded-tr-md rounded-br-md inter text-xl font-medium '
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export { GameAction };
