import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // Implement email functionality here
  }

  return (
    <div className='bg-white border-solid border-2 w-10/12 rounded-lg'>
        <h1 className='text-4xl justify-center grid mt-5'>Send us an email and we'll be sure to contact you soon!</h1>
        <form onSubmit={handleSubmit} className='h-3/5 w-1/2 grid grid-cols-5 grid-rows-4 mx-auto my-10 border-solid border-8 border-gray-800 p-5 gap-3'>
            <label className='grid row-start-1 col-span-2 text-xl'>
                Name:
                <input className=' border-solid border-2 rounded-lg' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className='grid row-start-3 col-start-1 col-span-2 text-xl'>
                Email:
                <input className=' border-solid border-2 rounded-lg ' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className='grid row-start-2 col-span-2 text-xl'>
                Phone:
                <input className=' border-solid border-2 rounded-lg ' type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label className='row-start-1 col-start-4 grid text-xl'>
                Anything else we should know:
                <textarea className=' border-solid border-2 rounded-lg grid text-xl' value={note} onChange={(e) => setNote(e.target.value)} />
            </label>
            <button className=' border-solid border-2 border-black row-start-4 col-start-2 col-span-3 text-xl' type="submit">Submit</button>
        </form>
        <h1 className='text-4xl justify-center grid'>Or just give us a call!</h1>
        <div className='grid grid-rows-1 grid-cols-2 justify-center gap-x-10'>
            <span className='text-3xl col-start-1 justify-self-end grid mt-5'>Jesse (999)-555-4545</span>
            <span className='text-3xl col-start-2 grid mt-5'>Roy (999)-555-4545</span>
        </div>
    </div>
  )
}

