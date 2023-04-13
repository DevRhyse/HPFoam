import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons' 
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

export default function Nav(prop) {
    const [activeComponent, setActiveComponent] = React.useState(1);

  const imageChange = (componentNumber) => {
    setActiveComponent(componentNumber);
  }

  const handleComponentChange = (componentNumber) => {
    prop.handleClick(componentNumber);
  }

  return (
    <div className="grid grid-cols-4 grid-rows-1 grid-flow-row w-1/3 mt-36">
        <FontAwesomeIcon icon={faHouse} size="8x" style={{color: "#ffffff",}} className='opacity-100' onClick={() => {handleComponentChange(1); imageChange(1)}} />

        {activeComponent === 2 && <FontAwesomeIcon icon={faFolderOpen} size="8x" style={{color: "#ffffff",}} className='opacity-100' onClick={() => { handleComponentChange(2)}}/>}

        {activeComponent === 1 && <FontAwesomeIcon icon={faFolder} size="8x" style={{color: "#ffffff",}} className='opacity-100' onClick={() => {handleComponentChange(2); imageChange(2)}}/>}

        <FontAwesomeIcon icon={faEnvelope} size="8x" style={{color: "#ffffff",}} className='opacity-100' onClick={() => {imageChange(1); handleComponentChange(3)}}/>

        <FontAwesomeIcon icon={faFile} size="8x" style={{color: "#ffffff",}} className='opacity-100' onClick={() => {handleComponentChange(4); imageChange(1)}} />
    </div>
  )
}
