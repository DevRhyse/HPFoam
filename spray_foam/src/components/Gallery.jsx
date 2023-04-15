import React, {useState, useEffect, useRef } from 'react'

export function ImageExpand(props) {
  const { imageUrl, onClick, expandedImage } = props;

  return (
    <div onClick={onClick}>
      <img
        src={imageUrl}
        alt="image"
        className="h-52 w-52 object-cover"
      />
      {imageUrl === expandedImage && (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen flex justify-center items-center">
          <div
            className="absolute w-full h-full bg-black opacity-50"
            onClick={props.onClose}
          ></div>
          <div ref={props.expandedImageRef}>
            <img src={expandedImage} alt="expanded" />
          </div>
        </div>
      )}
    </div>
  );
}

// Makes file url work
const urlFixer = (block) => block.map(ele => ele = ele.replace('/public', '')) 

export default function Gallery(prop) {
  const [images, setImages] = useState([]);
  const [expandedImage, setExpandedImage] = useState(null);
  const expandedImageRef = useRef();
    
    useEffect(() => {
      async function fetchImages() {
        // context file urls are broken
          const context = await import.meta.glob('/public/images/*.{jpg,jpeg,png,gif}');
          const imageUrls = Object.values(context).map(ele => ele.name);
          setImages(urlFixer(imageUrls));
        }
        fetchImages()
      }, [])
      
      const expandImage = (imageUrl) => {
        console.log(imageUrl.target.src)
        setExpandedImage(imageUrl.target.src);
      };
      
      const closeExpandedImage = () => {
        setExpandedImage(null);
      };
      
      useEffect(() => {
        const handleOutsideClick = (event) => {
          if (
            expandedImageRef.current &&
            !expandedImageRef.current.contains(event.target)
            ) {
              closeExpandedImage();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, [expandedImageRef]);

      const handleComponentChange = (componentNumber) => {
        prop.handleClick(componentNumber);
      }
      
      return (
        <div className='bg-white border-solid border-2 w-10/12 rounded-lg shadow-2xl'>
            <h1 className='grid justify-center text-3xl my-5'>Here is just a few example of our exceptional work!</h1>
            <h3 onClick={() => {handleComponentChange(4)}} className='grid justify-center text-2xl text-blue-700 hover:text-green-700'>Want to know more about what we're installing?</h3>
            {/* <div className="mt-10 mx-16 grid grid-cols-4 grid-flow-row gap-x-12 gap-y-12">
                {images.map((imageUrl, index) => (
                  <img src={imageUrl} key={`${imageUrl}_${index}`} alt="image" className='h-52 w-52 object-cover'/>
                  
                  ))}
                  {images.map((imageUrl, index) => (
                    <ImageExpand key={`${imageUrl}_${index}`} imageUrl={imageUrl} />
                    ))}
                  </div> */}
             <div className="mt-10 mx-16 grid grid-cols-4 grid-flow-row gap-x-12 gap-y-12">
  {images.map((imageUrl, index) => (
    <ImageExpand
      key={`${imageUrl}_${index}`}
      imageUrl={imageUrl}
      onClick={expandImage}
      closeExpandedImage={closeExpandedImage}
      expandedImageRef={expandedImageRef}
      expandedImage={expandedImage}
    />
  ))}
</div>
      {expandedImage && (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen flex justify-center items-center">
          <div
            className="absolute w-full h-full bg-black opacity-50"
            onClick={closeExpandedImage}
            ></div>
          <div ref={expandedImageRef}>
            <img src={expandedImage} alt="expanded" className='w-max h-max' />
          </div>
        </div>)}
        </div>
  )
}

