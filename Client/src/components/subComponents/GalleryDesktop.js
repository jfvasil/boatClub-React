import photo1 from '../../images/lake photos/1.jpg'
import photo2 from '../../images/lake photos/2.jpg'
import photo3 from '../../images/lake photos/3.jpg'
import photo4 from '../../images/lake photos/4.jpg'
import photo5 from '../../images/lake photos/5.jpg'
import photo6 from '../../images/lake photos/boatClubHouse.jpg'


const GalleryDesktop = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 min-w-full">Enjoy a Gallery from the Club</h1>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={photo1}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={photo2}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={photo3}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={photo4} />
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={photo5}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={photo6}/>
        </div>
      </div>
    </div>
  </div>
</section>
)}

export default GalleryDesktop