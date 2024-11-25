import PropTypes from 'prop-types';
import '../../style/categories.css';
function Category({ gamesCategoric, index }) {
  const colorDiv = gamesCategoric.randomClasses;
  const name = gamesCategoric.title;
  const imgSrc = gamesCategoric.img;
  return (
    <div key={index} className='w-[20vw] h-[20vw] cursor-pointer'>
      <div className={'w-full h-full relative'}>
        <div
          className={
            'z-30 absolute flex justify-center items-end w-[20vw] h-[20vw] pb-4 ' +
            colorDiv
          }
        >
          <div className='text-white inter text-lg text'>{name}</div>
        </div>
        <img src={imgSrc} className='w-full h-full object-cover' />
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
