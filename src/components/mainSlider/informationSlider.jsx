import { TagsCreator } from '../tagsCreator';
function InformationSlider({ price, tags, name, screenShots }) {
  return (
    <div className='h-full text-white p-2 flex flex-col justify-evenly'>
      <h1 className='semi-headers text-2xl pb-3'>{name}</h1>
      <div className=' hidden md:flex w-full justify-center  pt-602'>
        <img className='w-8/12  object-fill' src={screenShots}></img>
      </div>
      <div className='pt-6 flex justify-between pb-2'>
        <h2 className='semi-headers text-xl'>available now!</h2>
        <h3 className='pr-3 price text-lg'>{price}</h3>
      </div>
      <TagsCreator tagsArray={tags} />
    </div>
  );
}

export { InformationSlider };
