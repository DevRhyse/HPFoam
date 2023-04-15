import React from 'react'

export default function MSDS() {
  

  return (
    <div className="grid bg-white border-solid border-2 w-10/12 rounded-lg shadow-2xl">
      <h1 className='text-3xl justify-center grid mt-5'>Our Product</h1>
      <div>
        <h2 className='text-xl justify-center grid'>UPC SPF Foams</h2>
        <p className='text-xl grid w-3/5 mx-auto mt-5'>Energy efficient, reduces insulation time & costs, self flashing, weather resistant, enhances resistance to wind uplift, easy to apply, lightweight, protects against hail damage, available in different densities, seamless, covers geometric shapes & protrusions.</p>
        <span className='text-lg grid justify-center mt-5 text-green-600 hover:text-blue-500'><a href="https://foam-direct.com/wp-content/uploads/2021/12/UPC-2.0-Regular-_-High-Lift_092320EA.pdf">For more infomation about UPC 2.0 view or download the MSDS here</a></span>
      </div>
      <div className='grid grid-cols-2'>
        <div className='grid justify-items-center'>
            <h3 className='text-2xl'>Low Density/Open-Cell SPF - 0.5 lbs.</h3>
            <span className='text-lg text-center'>(UPC 500 REGULAR - UPC 500 MAX - UPC 500 Winter - UPC 500 Super Winter - UPC 500 OCX)</span>
            <p className='text-xl w-4/5'>Application: spray to substrate R-Value of 3.9 per in. Impermeable to air Expands to 150 x original volume Semi-Rigid Non-structural plastic barrier</p>
            <img className='' src='/open.png'/>
        </div>
        <div className='grid justify-items-center'>
            <h3 className='text-2xl'>High Density/Closed-Cell SPF - 2 lbs.</h3>
            <span className='text-lg'>(UPC 2.0 - REGULAR, WINTER, SUPER WINTER, SUMMER, HIGH LIFT)</span>
            <p className='text-xl w-4/5 '>Application: spray to substrate R-Value of over 6.6 per in. Impermeable to air & moisture Expands to 50 x original volume Rigid plastic barrier Provides increased structural integrity</p>
            <img className='' src='/close.png'/>
        </div>
      </div>
    </div>
  )
}
