import { Header } from '../layout/header';
import { CartGame } from '../components/cart/CartGame';
import { useContext } from 'react';
import { CartContext } from '../CartProvider';
function CartPage() {
  const cartObjList = useContext(CartContext);
  const { cartList, setCartList } = cartObjList;
  console.log(cartList);
  return (
    <div className='home-screen h-fit min-h-screen text-white flex flex-col p-7 pt-[100px]'>
      <Header />
      <div className='flex flex-col'>
        <h1 className='inter font-bold text-3xl'>My Cart</h1>
        <div className='flex'>
          {cartList !== undefined &&
            cartList.length !== 0 &&
            cartList.map((gameCart, index) => (
              <CartGame game={gameCart} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
export default CartPage;
