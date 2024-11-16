import PropTypes from 'prop-types';

function Category({ gamesCategoric, index }) {
  const colorDiv = gamesCategoric.randomClasses;
  const name = gamesCategoric.title;
  const imgSrc = gamesCategoric.img;
  return (
    <div key={index} className='w-[20vw] h-[20vw]'>
      <div className={'w-full h-full ' + colorDiv}>
        <img src={imgSrc} className='flex items-end justify-center'>
          {name}
        </img>
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
