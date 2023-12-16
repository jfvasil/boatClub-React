import {Link, useLocation} from 'react-router-dom'
import MobileNav from '../subComponents/MobileNav'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import flag from '../../images/flag.jpg'


const Header = () => {


const location = useLocation()
const {auth} = useAuth()
const [showDropDown, setShowDropDown] = useState(false)



const DropDownToggle = () => {
  setShowDropDown(!showDropDown)
}



  return (
    <>
    <header className="text-gray-600 fixed left-0 inset-x-0 z-20 bg-white">
  <div className='container flex flex-row justify-center pl-4'>
  <h1 className="flex font-sans items-center justify-center text-gray-800 ml-8"> 
    <img src={flag} alt = 'boat club logo' className='w-12 h-12'></img>
      <span className="ml-2 text-lg md:text-4xl">Lake Wickaboag Boat Club</span>
      </h1>
    <a href='https://www.facebook.com/groups/2819013791737133' target='_blank'  rel='noreferrer'><svg className='inline-flex w-7 h-5 ml-4 mt-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a>
    {/* <a href='tel:4138135751'><svg className='inline-flex items-center w-7 h-4 ml-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></a> */}
  </div>
    
      {/* mobile nav */}
      
        <MobileNav />
        
        {/*desktp nav */}
  <div className=' hidden md:flex justify-center bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold'>
    <nav className='flex  items-center justify-between md:text-xl mt-7 mb-3'>
      <Link to = '/' className={`mr-10 hover:text-red-200 ${location.pathname === '/' ? 'underline' : ''}`}>Home</Link>
      <Link to = '/About' className={`mr-10 hover:text-red-200 ${location.pathname === '/About' ? 'underline' : ''}`}>About Us</Link>
      <Link to = '/Form' className={`mr-10 hover:text-red-200 ${location.pathname === '/Form' ? 'underline' : ''}`}>Get In Touch</Link>
      <Link to = '/Rules-And-Faq' className={`mr-10 hover:text-red-200 ${location.pathname === '/Rules-And-Faq' ? 'underline' : ''}`}>FAQ</Link>
      <Link to = '/Shop' className={`mr-10 hover:text-red-200 ${location.pathname === '/Shop' ? 'underline' : ''}`}>Shop</Link>
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
    
    </div>

</header>
    </>
  )
}

export default Header