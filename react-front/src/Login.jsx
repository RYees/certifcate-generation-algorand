import { useNavigate }  from 'react-router-dom'

const Login = () => {
  const nav = useNavigate();
  function handleLogin() {
    
    nav("/staff");
  }
  return (
    <div className='text-center justify-center flex pt-36 pl-0 pr-0'>
        <div className='text-center flex justify-center h-96 w-96 shadow-xl rounded-lg bg-gray-200'>
            <div>
            <h1 className='text-4xl mt-5'>Login</h1>
            <div className='mt-12'>
            <div className='p-5'>
                <input type="email" placeholder='enter email' className='p-3 rounded inset-0 shadow-xl' />
            </div>
            <div>
                <input type="password" placeholder='enter password' className='p-3 rounded inset-0 shadow-xl' id="" />
            </div>
            </div>
            <div className='mt-14'>
            <button onClick={handleLogin} className='py-5 px-7 w-32 text-xl bg-yellow-600 rounded-full cursor-pointer'>Login</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login