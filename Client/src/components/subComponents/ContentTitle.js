const ContentTitle = ({textH1, textP, textH3}) => {
  return (
    <div className="flex flex-col text-center w-full mb-20">
    <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900">{textH1}</h1>
    <h2 className=" sm:text-2xl text-2xl body-font mb-4 text-gray-700">{textH3}</h2>
    <p className="lg:w-2/3 mx-auto leading-loose text-body text-lg">{textP}</p>
  </div>

  )
}

export default ContentTitle