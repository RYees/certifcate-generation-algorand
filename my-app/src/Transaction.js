import cert from './img/cert.jpg';
import React from "react";
import './style.css';

const Transaction = () => {
  const [time, setTime] = React.useState();

  const todos = [
    { id: 1, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY" , Message: "Sent to trainee J"},
    { id: 2, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", Message: "Sent to trainee A" },
    { id: 3, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", Message: "Sent to trainee K"},
    { id: 4, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY" , Message: "Sent to trainee J"},
    { id: 5, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", Message: "Sent to trainee A" },
    { id: 6, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", Message: "Sent to trainee K"},
  ];
    
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
     <div className='titlehead'>
        <h1 className=''>Transactions</h1>
      </div>

    <section className='section'>
        {
        todos.map((todo) => (   
            <div key={todo.id} className=''>
                <div className='box'>        
                    <div >
                    {/* <button  className='bg-white p-3 rounded-full mb-10'>Details</button> */}
                            <h2 className='mb-2'>Amount: 0.001Algo</h2>
                            <p className='mb-2'>Message: {todo.Message}</p>
                            <div className='mt-4 mb-5'>
                                <img src={cert} alt="" height={120} width={150} />
                            </div>
                            <div>
                                <p>{time}</p>
                            </div>
                    </div>
                </div>
            </div>
            ))  
        } 
    
</section>
</>
  )
}

export default Transaction