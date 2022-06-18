import logo from '../10logo.jpg';
import * as React from 'react';


const StaffTransaction = () => {
  const [time, setTime] = React.useState();
    
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

    
  return (
    <div>
        <div>
            <div>
                <h1 className='text-center'>Transactions</h1>
            </div>

            <div>
                <div>
                    <h2>From:</h2>
                    <h2>To:</h2>
                    <h2>Amount: 0.001Algo</h2>
                    <p>Message: Sent to trainee J</p>
                    <div>
                        <img src={logo} alt="" height={20} width={190} />
                    </div>
                    <div>
                        <p>{time}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StaffTransaction