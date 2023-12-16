import photo1 from '../../images/lake photos/from-lake.jpg'
import photo2 from '../../images/lake photos/2.jpg'
import photo3 from '../../images/lake photos/3.jpg'
import photo4 from '../../images/lake photos/4.jpg'
import photo5 from '../../images/lake photos/5.jpg'
import photo6 from '../../images/lake photos/can.jpg'
import photo7 from '../../images/lake photos/duke.jpg'
import photo8 from '../../images/lake photos/door.jpg'
import { useState } from 'react'
import FullScreenModal from '../utilityComponents/FullScreenModal'
import GalleryDesktop from './GalleryDesktop'

const Gallery = () => {

  const [isModelOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const openModal = (url) => {
    setSelectedImage(url)
    setIsModalOpen(true)
    }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage('')
  }

  return (
<div>
<section className="text-gray-600 body-font md:hidden">
  <div>
    <h2 className='text-3xl leading-10 text-center pb-4 font-semibold'>Enjoy a little gallery of the lake</h2>
    <h4 className='text-xl leading-12 text-center'>Scroll left to view  more or click to see fullscreen</h4>
  </div>
<div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
  <div className="carousel-item w-full ">
    <img src={photo7} alt='default' 
    className="rounded-3xl object-contain"
    onClick={() => openModal(photo7)} />
  </div> 
  <div className="carousel-item w-full ">
    <img src={photo2}  alt='default' 
    className="rounded-box object-contain"
    onClick={() => openModal(photo2)} />
  </div> 
  <div className="carousel-item w-full">
    <img src={photo3} alt='default' 
    className="rounded-box object-contain"
    onClick={() => openModal(photo3)} />
  </div> 
  <div className="carousel-item w-full">
    <img src={photo4}  alt='default' 
    className="rounded-box object-cover" 
    onClick={() => openModal(photo4)}/>
  </div> 
  <div className="carousel-item w-full">
    <img src={photo5}  alt='default' 
    className="rounded-box object-contain"
    onClick={() => openModal(photo5)} />
  </div> 
  <div className="carousel-item w-full">
    <img src={photo6}  alt='default' 
    className="rounded-box object-contain"
    onClick={() => openModal(photo6)} />
  </div> 
   <div className="carousel-item w-full">
    <img src={photo1} alt='default' 
    className="rounded-box object-contain"
    onClick={() => openModal(photo1)} />
  </div> 
   <div className="carousel-item w-full">
    <img src={photo8} alt='default' 
    className="rounded-box object-contain"
    onClick={() => openModal(photo8)} />
  </div> 
</div>
    {isModelOpen && (
      <FullScreenModal Url={selectedImage} onClose={closeModal} />
    )}
</section>
<section className='hidden md:block'>
  <GalleryDesktop />
</section>
</div>
  )
}

export default Gallery