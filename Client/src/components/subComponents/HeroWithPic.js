

const HeroWithPic = ({image,alt,h1Text,pText}) => {
  return (
    <section className="text-gray-600 md:relative md:top-32 -mb-9 md:mb-0">
  <div className="container flex-col mx-auto flex px-5 py-24 md:flex-row items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 sm:order-1 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <div>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold underline">
        {h1Text}
      </h1>
      </div>
    <div className="sm:order-3">
      <p className="body-font leading-relaxed">{pText}</p>
      </div>
    </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:order-2">
      <img className="object-cover object-center rounded" alt={alt} src={image}></img>
    </div>
  </div>
</section>
  )
}

export default HeroWithPic