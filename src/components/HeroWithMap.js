
const HeroWithMap = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
  <div className="lg:w-2/3 md:w-1/2  rounded-lg  sm:mr-10  flex items-end justify-start overflow-hidden">    
  <iframe className="relative inset-0 b-0 object-contain object-center rounded w-full h-full" title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1297.6796643380396!2d-72.14802959965613!3d42.23883043540111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1688054673261!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="no" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Lake Wickaboag Boat Club
        <span className="hidden lg:inline-block">Tagline?</span>
      </h1>
      <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet. Urna molestie at elementum eu facilisis sed odio morbi. In iaculis nunc sed augue lacus.</p>
    </div>
  </div>
</section>
  )
}

export default HeroWithMap