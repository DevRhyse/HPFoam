import React from 'react'
// import Logo from './images/IMG_1192.jpg'

export default function Home() {
  

  return (
    <div className="grid grid-cols-2 grid-rows-1 bg-white border-solid border-2 w-10/12 rounded-lg">
        <div className='col-start-1 text-7xl self-center leading-normal ml-20'>
            <h1 className='text-slate-700'>High Proformance Spray Foam</h1>
            <h2 className='text-slate-500'>Jesse (999)-555-4545</h2>
            <h2 className='text-slate-500'>Roy (999)-555-4545</h2>
        </div>
      <img className='col-start-2 self-center' src='/images/companyBrandImage.jpg'></img>
    </div>
  )
}
