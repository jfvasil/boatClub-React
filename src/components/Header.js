import {Link, useLocation} from 'react-router-dom'


const Header = () => {
const location = useLocation()

  return (
    <>
    <header className="text-gray-600">
  <div className='container mx-auto flex p-5 flex-row justify-center'>
  <h1 className="flex  title-font font-medium items-center justify-center text-gray-900  ml-6"> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-4 text-2xl md:text-4xl">Lake Wickaboag Boat Club</span>
      </h1>
    <a href='#'><svg className='inline-flex items-center w-7 h-5 ml-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a>
    <a href='#'><svg className='inline-flex items-center w-7 h-4 ml-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></a>
    

    
    </div>
    <div className='flex justify-center'>
    <nav className="flex  items-center justify-between md:text-xl mt-7">
      <Link to = '/' className={`mr-10 hover:text-gray-900 ${location.pathname === '/' ? 'underline' : ''}`}>Home</Link>
      <Link to = 'About' className={`mr-10 hover:text-gray-900${location.pathname === '/About' ? 'underline' : ''}`}>About Us</Link>
      <Link to = '/Form' className={`mr-10 hover:text-gray-900${location.pathname === '/Form' ? 'underline' : ''}`}>Join The Club</Link>
      <Link to = '/MembersLogin' className={`hover:text-gray-900${location.pathname === '/MembersLogin' ? 'underline' : ''}`}>Members Login</Link>
    </nav>
    </div>
 
</header>
    </>
  )
}

export default Header