import lake from '../../images/BoatClubPavillion.jpg'
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
    <img src={lake} alt='default' 
    className="rounded-3xl object-contain"
    onClick={() => openModal(lake)} />
  </div> 
  <div className="carousel-item w-full ">
    <img src={lake}  alt='default' 
    className="rounded-box object-contain"
    onClick={() => openModal(lake)} />
  </div> 
  <div className="carousel-item w-full">
    <img src={lake} alt='default' 
    className="rounded-box object-contain"
    onClick={() => openModal(lake)} />
  </div> 
  <div className="carousel-item w-full">
    <img src={lake}  alt='default' 
    className="rounded-box object-cover" 
    onClick={() => openModal(lake)}/>
  </div> 
  <div className="carousel-item w-full">
    <img src={lake}  alt='default' 
    className="rounded-box object-contain"
    onClick={() => openModal(lake)} />
  </div> 
  <div className="carousel-item w-full">
    <img src={lake}  alt='default' 
    className="rounded-box object-contain"
    onClick={() => openModal(lake)} />
  </div> 
  <div className="carousel-item w-full">
    <img src={lake} alt='default' 
    className="rounded-box object-contain"
    onClick={() => openModal(lake)} />
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