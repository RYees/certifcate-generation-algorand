import { Link } from 'react-router-dom';

const MainSideBar = () => {
  return (
    <header className='bg-yellow-600 max-w-xs h-screen fixed'>
    {/* <div>MainSideBar</div> */}
    <nav className=''>
        <ul className='mt-8'>
            {/* <li>
               <Link to='/'>Login</Link>
            </li> */}
            <li className='p-4 border w-64 ml-2 mb-5 cursor-pointer'>
                <Link to='/staff' className='mt-10'>Staff</Link>
            </li>
            <li className='p-4 border w-64 ml-2 mr-4 cursor-pointer'>
                <Link to='/trainee'>Trainee</Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default MainSideBar