import { useNavigate }  from 'react-router-dom'

const Login = () => {
  const nav = useNavigate();
  function handleLogin() {
    
    nav("/staff");
  }
  return (
    <div className=''>
        <div className=''>
            <div>
            <h1 className=''>Login</h1>
            <div className=''>
            <div className=''>
                <input type="email" placeholder='enter email' className='' />
            </div>
            <div>
                <input type="password" placeholder='enter password' className='' id="" />
            </div>
            </div>
            <div className=''>
            <button onClick={handleLogin} className=''>Login</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login