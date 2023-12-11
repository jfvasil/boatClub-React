

export const Download = ({text, file}) => {
  return (
    
    <div className="my-10">
         <h2 className=" text-2xl mb-4">
        {text}
        </h2>
        <a href={file} target='_blank' rel='noreferrer'><button className="btn btn-md lg:btn-lg text-xl" >
        Click Here to Download
        </button></a>
    </div>

  )
}

export default Download