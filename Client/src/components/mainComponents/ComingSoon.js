import { faCog} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Download from '../subComponents/Download'
import flyer from '/Users/Johnny/Desktop/repos/boat-club-react.orig/Client/src/images/LWBCflyer2.pdf'

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className=" text-2xl md:text-3xl font-bold mb-4">Boat Club Shop 2024 Coming Soon</h1>
        <FontAwesomeIcon icon={faCog} className="text-5xl text-blue-500 animate-spin my-4" />
        <Download 
        text={'Download last years catalogue below'}
        file={flyer}/>
        <p className="mb-4 px-4">
          Note that not all items in this catalogue will be available in the 2024 shop.
        </p>

      </div>
    </div>
  )
}

export default ComingSoon
