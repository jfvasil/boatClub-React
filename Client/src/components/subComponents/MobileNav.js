import useAuth from "../../hooks/useAuth"
import {Link, useLocation} from 'react-router-dom'
import { useState } from "react"
import { faBars, faTimes} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"






const MobileNav = () => {

const {auth} = useAuth()
const location = useLocation()

const [showDropDown, setShowDropDown] = useState(false)
const [mobileNav, setMobileNav] = useState(false)

const DropDownToggle = () => {
    setShowDropDown(!showDropDown)
  
}


const toggleMobileNav = () => {
  setMobileNav(!mobileNav)
}

  return (
    <div className={` md:hidden flex flex-col items-center bg-gradient-to-r  from-green-400 to-blue-500 text-black py-1 transition-transform ease-in-out transform ${mobileNav ? 'translate-y-0' : 'translate-y-full' } `}>
    {mobileNav ? (
      <>
       <button className='ml-5 self-start text-black hover:text-red-200 text-3xl' onClick={toggleMobileNav}>
       <FontAwesomeIcon icon={faTimes} />
       </button>
    <nav className='flex flex-col text-xl min-h-screen'>
    <Link to = '/' className={`mb-5 hover:text-red-200 ${location.pathname === '/' ? 'underline' : ''}`}>Home</Link>
    <Link to = '/About' className={`mb-5 hover:text-red-200 ${location.pathname === '/About' ? 'underline' : ''}`}>About Us</Link>
    <Link to = '/Form' className={`mb-5 hover:text-red-200 ${location.pathname === '/Form' ? 'underline' : ''}`}>Get In Touch</Link>
    <Link to = '/Shop' className={`mb-5 hover:text-red-200 ${location.pathname === '/Shop' ? 'underline' : ''}`}>Shop</Link>
    {auth.accessToken ? 
      (
        <div className="relative inline-block">
          <button className="hover:text-red-200 font-semibold focus:outline-none" onClick={DropDownToggle}>
            Member Links
          </button>
          {showDropDown && (
          <div className="absolute z-10 bg-white rounded-md shadow-md py-2 right-0 mt-1">
            <Link
              to="/MeetingRecaps"
              className={`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 ${
                location.pathname === '/meeting-recaps' ? 'underline' : ''
              }`}
            >
              Meeting Recaps
            </Link>
            <Link
              to="/NewsAndUpdates"
              className={`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 ${
                location.pathname === '/news-and-updates' ? 'underline' : ''
              }`}
            >
              News and Updates
            </Link>
            <Link
              to="/Events"
              className={`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 ${
                location.pathname === '/events' ? 'underline' : ''
              }`}
            >
              Events
            </Link>
          </div>)}
        </div>
      ) : (
        <Link to='/login' className='hover:text-red-200'> Member Log In </Link>

      )}
    </nav>
    </>
  ) :
    (<button className=' text-gray-600 hover:text-red-200 text-3xl absolute bottom-9 left-4' onClick={toggleMobileNav}>
  <FontAwesomeIcon icon={faBars} />
</button>
)}
</div>
)}

export default MobileNav