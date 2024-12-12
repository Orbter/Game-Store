import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='w-[100%]'>
      <h1 className='text-3xl'>Oh no, this route doesn't exist!</h1>
      <h1 className='text-3xl'>
        You can go back to the home page by clicking here, though!
      </h1>
      <Link to='/'>
        <button className='bg-blue-500 rounded-sm'>click here!</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
