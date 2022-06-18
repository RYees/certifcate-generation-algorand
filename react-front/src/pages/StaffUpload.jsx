import React from 'react'

const StaffUpload = () => {
  return (
    <>
     <div className='mt-32'>
        <h1 className='text-center text-3xl text-white p-4'>Send Certificate to Algorand Blockchain</h1>
      </div>   
   
    <div>
        <div className='p-2'>
             
                <form action="" className='flex flex-wrap gap-40 m-10 p-5 py-20 justify-center bg-gray-800'>
                    <div className='bg-white py-4 rounded-lg'>
                    <div className='p-5 w-96 relative'>
                        <input type="text" placeholder='trainee name' className='p-2 w-full border rounded hover:bg-gray-100' />
                    </div>

                    <div className='p-5'>
                        <input type="text" placeholder='trainee email' className='p-2 w-full border rounded hover:bg-gray-100' />
                    </div>

                    <div className='p-5'>
                        <input type="text" placeholder='trainee certificate' className='p-2 w-full border rounded hover:bg-gray-100' />
                    </div>
                    </div>

                    <div>
                        <button className='p-4 my-32 bg-red-600 px-10 rounded-full text-white'>Send</button>
                    </div>                    
                </form>
            </div>
    </div>
    </>
  )
}

export default StaffUpload