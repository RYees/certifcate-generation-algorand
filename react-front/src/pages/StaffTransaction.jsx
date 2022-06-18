import logo from '../10logo.jpg';
import * as React from 'react';
import data from './StaffData';

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
    <>
     <div>
        <h1 className='text-center text-4xl text-white mb-10'>Transactions</h1>
      </div>

   
    <div className='bg-red-900 w-80 rounded-lg'>
        <div className='bg-red-500 ml-5 px-8 py-4 rounded'>           
          
                <div>
                    <h2 className='mb-2 scroll-x'>From: RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY</h2>
                    <h2 className='mb-2'>To: RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY</h2>
                    <h2 className='mb-2'>Amount: 0.001Algo</h2>
                    <p className='mb-2'>Message: Sent to trainee J</p>
                    <div className='mt-4 mb-5'>
                        <img src={logo} alt="" height={20} width={190} />
                    </div>
                    <div>
                        <p>{time}</p>
                    </div>
                </div>
            
        </div>
    </div>
    </>
  )
}

export default StaffTransaction