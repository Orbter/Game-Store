import heart from '../../../assets/svg/heart.svg';

function LikedButton() {
  return (
    <div className="bg-buttonBlack cursor-pointer rounded-lg flex justify-center items-center w-10 h-10">
      <img src={heart} className="w-[50%]"></img>
    </div>
  );
}
export { LikedButton };