const ContentTitle = ({textH1, textP}) => {
  return (
    <div className="flex flex-col text-center w-full mb-20">
    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{textH1}</h1>
    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{textP}</p>
  </div>

  )
}

export default ContentTitle