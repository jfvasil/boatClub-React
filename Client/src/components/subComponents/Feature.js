
const Feature = ({image,alt}) => {
  return (
    <div className="conatainer mx-auto relative top-20 md:top-32">
    <img className='w-full mx-auto' src={image} alt={alt}></img>
    </div>
  )
}

export default Feature