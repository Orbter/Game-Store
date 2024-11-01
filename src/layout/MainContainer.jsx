import { MainSlider } from '../components/mainSlider/MainSlider';
import { InformationSlider } from '../components/mainSlider/informationSlider';
function MainContainer() {
  return (
    <div className='bg-main-blue w-9/12 min-h-[550px] h-100vw flex-col'>
      <div className='w-full'>
        <MainSlider />
      </div>
      <div className='w-full'>
        <InformationSlider />
      </div>
    </div>
  );
}
export { MainContainer };
