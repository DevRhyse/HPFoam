import React, {useState, useEffect } from 'react'

// Makes file url work
const urlFixer = (block) => block.map(ele => ele = ele.replace('../', './src/')) 

export default function Gallery() {
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        async function fetchImages() {
            // context file urls are broken
          const context = await import.meta.glob('./images/*.{jpg,jpeg,png,gif}');
          const imageUrls = Object.values(context).map(ele => ele.name);
          setImages(urlFixer(imageUrls));
        }
        fetchImages();
      }, [])


    return (
        <div className='bg-white border-solid border-2 w-10/12 rounded-lg'>
            <h1 className='grid justify-center text-7xl mb-5'>Here is just a few example of our exceptional work!</h1>
            <h3 className='grid justify-center text-4xl'>Want to know more about what we're installing?</h3>
            <div className="mt-10 mx-16 grid grid-cols-4 grid-flow-row gap-y-12">
                {images.map((imageUrl, index) => (
                    <img src={imageUrl} key={`${imageUrl}_${index}`} alt="image" className='h-72 w-72 object-cover'/>
            ))}
            
            </div>
        </div>
  )
}

