import shop from '../../../assets/svg/shopping-icon.svg';

function ShopButton() {
  return (
    <div className="bg-buttonBlack cursor-pointer rounded-lg flex justify-center items-center w-10 h-10">
      <img src={shop} className="w-[50%]"></img>
    </div>
  );
}
export { ShopButton };
