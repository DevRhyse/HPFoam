import React, {useState, useEffect } from 'react'

// Makes file url work
const urlFixer = (block) => block.map(ele => ele = ele.replace('../', './src/')) 

export default function Gallery() {
    const [images, setImages] = useState([]);
    
    // useEffect(() => {
    //     async function fetchImages() {
    //         // context file urls are broken
    //       const context = await import.meta.glob('/images/*.{jpg,jpeg,png,gif}');
    //       const imageUrls = Object.values(context).map(ele => ele.name);
    //       console.log(context)
    //       console.log(imageUrls)
    //       setImages(urlFixer(imageUrls));
    //     }
    //     fetchImages();
    //   }, [])

    useEffect(() => {
      // Load all images from the /images folder at build time
      const imageFiles = require.context('../public/images', true, /\.(jpg|jpeg|png|gif)$/);
      const imageUrls = imageFiles.keys().map(key => imageFiles(key));
      console.log(context)
      console.log(imageUrls)
      setImages(urlFixer(imageUrls));
    }, []);

    return (
        <div className='bg-white border-solid border-2 w-10/12 rounded-lg shadow-2xl'>
            <h1 className='grid justify-center text-3xl my-5'>Here is just a few example of our exceptional work!</h1>
            <h3 className='grid justify-center text-2xl'>Want to know more about what we're installing?</h3>
            <div className="mt-10 mx-16 grid grid-cols-4 grid-flow-row gap-y-12">
                {images.map((imageUrl, index) => (
                    <img src={imageUrl} key={`${imageUrl}_${index}`} alt="image" className='h-72 w-72 object-cover'/>
            ))}
            
            </div>
        </div>
  )
}

