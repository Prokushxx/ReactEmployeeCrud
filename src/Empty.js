import React from 'react'

function Empty() {
  return (
    <div className='bg-gray-500 h-screen w-screen flex justify-center items-center'>
      <div className='grid-cols-2'>
        <p className='text-5xl text-white'>PAGE DOES NOT EXIST</p><br/>
        <h1 className='text-2xl flex justify-center font-semibold text-white'>There is nothing to Show Here
        </h1>
      </div>
    </div>
  )
}

export default Empty