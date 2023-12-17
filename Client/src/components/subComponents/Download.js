

export const Download = ({text, file}) => {
  return (
    
    <div className="my-10 pt-4 text-gray-700 md:pl-10">
         <h2 className="text-xl mb-4 lg:text-2xl">
        {text}
        </h2>
        <a href={file} target='_blank' rel='noreferrer'><button className="btn btn-sm md:btn-lg text-xl" >
        Click Here to Download
        </button></a>
    </div>

  )
}

export default Download