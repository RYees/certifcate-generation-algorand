import React from 'react'
import cert from '../cert.jpg'

const TraineeRequest = () => {
  return (
    <>
      <div className='mt-32'>
        <h1 className='text-center text-3xl text-white p-4'>Send Request</h1>
      </div> 
    <div className='flex flex-row gap-64 mt-10 mx-20'>
      <div>
       <h1 className='text-white text-2xl mb-5'>10academy Certificate</h1>
       <img src={cert} alt="" height={1} width={400} className="h-96"/>
      </div>
      <div className='my-36'> 
        <h2  className='text-white text-xl mb-5'>Send request to recieve your certificate</h2>
        <button className='text-center p-5 text-white rounded-full bg-red-600 hover:filter hover:brightness-110'>Send Request</button>
      </div>
    </div>
    </>
  )
}

export default TraineeRequest