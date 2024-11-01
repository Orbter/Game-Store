import PropTypes from 'prop-types';

function TagsCreator({ tagsArray }) {
  return (
    <ul className='flex gap-3 flex-wrap'>
      {tagsArray.map((tag, index) => (
        <li
          key={index}
          className='tags-color text-white price w-fit h-5 text-xs flex justify-center items-center w-fit p-2 rounded-sm '
        >
          {tag.name}
        </li>
      ))}
    </ul>
  );
}
//w-24 h-7
TagsCreator.propTypes = {
  tagsArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

export { TagsCreator };
