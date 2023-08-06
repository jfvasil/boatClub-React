
const Feature = ({image,alt}) => {
  return (
    <div className="conatainer mx-auto">
    <img className='w-full mx-auto' src={image} alt={alt}></img>
    </div>
  )
}

export default Feature