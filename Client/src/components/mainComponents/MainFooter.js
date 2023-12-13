import {useNavigate,Link} from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useLogout from '../../hooks/useLogout'


const MainFooter = () => {
  const navigate = useNavigate()
  const {auth} = useAuth()
  const logout = useLogout()

  const signOut = async () => {
    await logout()
    navigate('/')
  }

  return (
    <footer className="text-gray-600 body-font  bg-red-600 ">
  <div className="container mx-auto px-5 py-12 flex md:items-center  md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <p className="flex title-font  font-medium items-center md:justify-start justify-center text-gray-900">
        <span className=" text-xl">Lake Wickaboag Boat Club</span>
      </p>
      <p className="mt-2 text-sm text-black">"Ashore or afloat, create lasting memories for the whole family!"</p>
    </div>
    <div className="flex-grow flex md:pr-20  md:text-left text-center order-first md:flex-wrap">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <Link to='/'><h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 hover:text-gray-900">Home</h2></Link>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <Link to='/About'><h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 hover:text-gray-900">About Us</h2></Link>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <Link to="/Form"><h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 hover:text-gray-900">Get In Touch</h2></Link>
    </div>
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <Link to="/Rules-And-Faq"><h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 hover:text-gray-900">FAQ</h2></Link>
    </div>
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <Link to="/Shop"><h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 hover:text-gray-900">Shop</h2></Link>
        </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col md:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left md:mt-4">© 2023 Lake Wickaboag Boat Club —
        <a href="https://twitter.com/johnnyfvasil" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@JohnnyFVasil</a>
      </p>
      {auth.accessToken && (
        <button className='bg-blue-400 text-lg ml-5 px-2 py-2 focus:outline-none focus:shadow-outline rounded-md hover:bg-blue-600 text-white font-bold md:mb-7' 
        onClick={signOut}>Sign Out</button>
      )}
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a href='https://www.facebook.com/groups/2819013791737133' className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        {/* <a href='tel:4138135751' className="text-gray-500 ml-4">
            <svg fill="currentColor" className="w-5 h-5"strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 512 512">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                </svg>
                </a> */}

      </span>
    </div>
  </div>
</footer>
  )
}

export default MainFooter