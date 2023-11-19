import lake from '../../images/BoatClubPavillion.jpg'

const Gallery = () => {
  return (
<section className="text-gray-600 body-font">
<div className="carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box">
  <div className="carousel-item w-1/2 h-1/2">
    <img src={lake} alt='default' className="rounded-box object-contain w-full" />
  </div> 
  <div className="carousel-item w-1/2 h-1/2">
    <img src={lake}  alt='default' className="rounded-box object-contain  w-full" />
  </div> 
  <div className="carousel-item w-1/2 h-1/2">
    <img src={lake} alt='default' className="rounded-box object-contain  w-full" />
  </div> 
  <div className="carousel-item w-1/2 h-1/2">
    <img src={lake}  alt='default' className="rounded-box object-contain w-full" />
  </div> 
  <div className="carousel-item w-1/2 h-1/2">
    <img src={lake}  alt='default' className="rounded-box object-contain  w-full" />
  </div> 
  <div className="carousel-item w-1/2 h-1/2">
    <img src={lake}  alt='default' className="rounded-box object-contain  w-full" />
  </div> 
  <div className="carousel-item w-1/2 h-1/2">
    <img src={lake} alt='default' className="rounded-box object-contain w-full" />
  </div>
</div>
</section>
  )
}

export default Gallery