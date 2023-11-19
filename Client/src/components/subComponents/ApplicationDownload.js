import application from '../../images/boat-club-application.pdf'

export const ApplicationDownload = () => {
  return (
    
    <div className="my-10">
         <h2 className=" text-2xl mb-4">
        Looking for an application to join?
        </h2>
        <a href={application}><button className="btn btn-md lg:btn-lg text-xl">
        Click Here to Download
        </button></a>
    </div>

  )
}

export default ApplicationDownload