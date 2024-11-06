import heart from '../../../assets/svg/heart.svg';

function LikedButton() {
  return (
    <div className="bg-buttonBlack rounded-lg flex justify-center items-center">
      <img src={heart}></img>
    </div>
  );
}
export { LikedButton };
