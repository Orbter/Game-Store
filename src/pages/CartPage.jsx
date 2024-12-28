import { Header } from '../layout/header';
import { CartGame } from '../components/cart/CartGame';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartProvider';
function CartPage() {
  const [priceGames, setPrice] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const cartObjList = useContext(CartContext);
  const { cartList, setCartList } = cartObjList;
  const calculatePrice = () => {
    let totalPrice = 0;
    for (let index = 0; index < cartList.length; index++) {
      const element = cartList[index];
      const price = element.price;
      totalPrice = totalPrice + price;
    }
    setPrice(totalPrice);
  };
  const calculateSubTotal = () => {
    const price = priceGames * 1.2;
    setSubTotal(price);
  };
  useEffect(() => {
    calculatePrice();
    calculateSubTotal();
  }, [cartList, priceGames]);

  return (
    <div className='home-screen h-fit min-h-screen text-white flex flex-col p-7 pt-[100px]'>
      <Header />
      <div className='flex flex-col h-fit min-h-[70vh] 2xl:justify-around'>
        <h1 className='inter font-bold text-3xl mb-7'>My Cart</h1>
        <div className='flex flex-col items-center lg:items-start lg:flex-row justify-between min-h-[70vh] 2xl:justify-around'>
          <div className='flex flex-col gap-5 lg:flex-col'>
            {cartList !== undefined &&
              cartList.length !== 0 &&
              cartList.map((gameCart, index) => (
                <CartGame game={gameCart} key={index} />
              ))}
          </div>

          <div className='lg:h-[70vw] flex items-center lg:items-start'>
            <div className='bg-buttonBlack mt-20 lg:mt-0 rounded-xl inter w-[80vw] lg:w-[350px] h-[400px] p-5'>
              <h1 className=' font-black text-3xl'>Games and Apps Summary</h1>
              <div className='border-b-2 border-solid border-gray-700 border-opacity-85 flex flex-col justify-around h-[30%]'>
                <div className='flex justify-between'>
                  <p className='text-gray-500'>Price</p>
                  <p>{`$${priceGames}`}</p>
                </div>
                <div className='flex justify-between'>
                  <p className='text-gray-500'>Taxes</p>
                  <p>%20</p>
                </div>
              </div>
              <div className='flex flex-col items-center h-[50%] justify-around'>
                <div className='w-full'>
                  <div className='flex justify-between'>
                    <p className='font-bold'>Subtotal</p>
                    <p className='font-bold'>{`$${subTotal}`}</p>
                  </div>
                </div>
                <button className='bg-blue-500 w-[70%] h-11 rounded font-semibold hover:scale-110 hover:font-bold transition duration-150'>
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
