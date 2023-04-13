import React from 'react'
import Home from './Home'
import Gallery from './Gallery'
import Contact from './Contact'
import MSDS from './MSDS'
import Nav from './Nav'

export default function App() {
  const [activeComponent, setActiveComponent] = React.useState(1);

  const handleComponentChange = (componentNumber) => {
    setActiveComponent(componentNumber);
  }

  return (
    <div className="grid bg-[url('./foamTest.webp')] bg-cover w-screen h-screen font-sans">
      <div className='grid justify-items-center pt-5 w-3/4 mx-auto'>
        <Nav handleClick={handleComponentChange}/>
        {activeComponent === 1 && <Home />}
        {activeComponent === 2 && <Gallery />}
        {activeComponent === 3 && <Contact />}
        {activeComponent === 4 && <MSDS />}
          <div className=' '>
          </div>
          <div className=' '>
          </div>
      </div>
    </div>
  )
}

