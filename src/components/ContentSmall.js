const ContentSmall = ({textH21,textP1,textH22,textP2}) => {
    let linkText = 'Click for more info'
  return (
    <section className= 'container mx-auto flex flex-row justify-right' >
    <div className="lg:w-1/2 w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{textH21}</h2>
    <p className="leading-relaxed text-base mb-4">{textP1}</p>
    <a className="text-blue-500 inline-flex items-center">{linkText}
      <svg fill="none" stroke="currentColor" strokLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 512 512">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
    </div>
    <div className="lg:w-1/2 w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
  <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{textH22}</h2>
  <p className="leading-relaxed text-base mb-4">{textP2}</p>
  <a className="text-blue-500 inline-flex items-center">{linkText}
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </a>
    </div>
    </section>
  )
}

export default ContentSmall