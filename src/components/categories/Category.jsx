import PropTypes from 'prop-types';
import '../../style/categories.css';
function Category({ gamesCategoric, index }) {
  const colorDiv = gamesCategoric.randomClasses;
  const name = gamesCategoric.title;
  const imgSrc = gamesCategoric.img;
  return (
    <div key={index} className='w-[19vw] h-[19vw]  cursor-pointer '>
      <div className={'w-full h-full relative'}>
        <div
          className={
            'z-30 absolute flex justify-center items-end medium-size w-[19vw] h-[19vw] pb-4  hover:translate-y-2  hover:opacity-50 transition duration-800  ' +
            colorDiv
          }
        >
          <div className='text-white inter text-lg text'>{name}</div>
        </div>
        <img src={imgSrc} className='w-full h-full object-cover ' />
      </div>
    </div>
  );
}

Category.propTypes = {
  gamesCategoric: PropTypes.shape({
    randomClasses: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export { Category };
