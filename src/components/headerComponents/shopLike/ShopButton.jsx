import shop from '../../../assets/svg/shopping-icon.svg';

function ShopButton() {
  return (
    <div className="bg-buttonBlack rounded-lg flex justify-center items-center">
      <img src={shop}></img>
    </div>
  );
}
export { ShopButton };
