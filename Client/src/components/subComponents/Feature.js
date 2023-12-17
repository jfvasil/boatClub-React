
const Feature = ({image,alt}) => {
  return (
    <div className="conatainer mx-auto relative top-16 md:top-28">
    <img className='w-full mx-auto' src={image} alt={alt}></img>
    </div>
  )
}

export default Feature