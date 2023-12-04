import boatIcon from "../../images/9035720_boat_sharp_icon.png"

const ContactList = () => {
  return (
    <section className="text-gray-600 body-font md:relative md:top-24">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Boat Club Officers</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">All of those that make the boat club function!</p>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={boatIcon}></img>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Mark O'Donnell</h2>
            <p className="text-gray-500">Commodore</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={boatIcon}></img>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Vin Provencher</h2>
            <p className="text-gray-500">Vice Commodore</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={boatIcon}></img>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Scott Trombley</h2>
            <p className="text-gray-500">Rear Commodore</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={boatIcon}></img>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Tom Ducasse</h2>
            <p clasNames="text-gray-500">Captain</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={boatIcon}></img>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Ron Garceau</h2>
            <p className="text-gray-500">Lieutenant</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={boatIcon}></img>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Jenn Vasil</h2>
            <p className="text-gray-500">Secretary</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={boatIcon}></img>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Pam Clark</h2>
            <p className="text-gray-500">House Chairman</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={boatIcon}></img>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Chet Kurr</h2>
            <p className="text-gray-500">Entertainment</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={boatIcon}></img>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Ken Henneman, Bill Hissem, Gerry Nichols, Chris Dimarzio</h2>
            <p className="text-gray-500">Directors</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default ContactList