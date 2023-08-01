import { Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Logout from './components/Logout';
import Layout from './components/Layout'
import Unauthorized from './components/Unauthorized'
import RequireAuth from './components/RequireAuth';
import SignupForm from './components/SignUpForm'
import Landing from './pages/Landing';
import About from './pages/About'
import Form from './pages/Form';
import Shop from './pages/Shop';
import MeetingRecaps from './pages/MeetingRecaps';
import Events from './pages/Events';
import NewsAndUpdates from './pages/NewsAndUpdates';
import PersistLogin from './components/PersistLogin'


function App() {
  return (
  
   <Routes>
     

        <Route path='/' element={<Layout />}>
          {/* public routes */}
          <Route element={<PersistLogin />}>

      <Route exact path = '/home' element = {<Landing  />} />
      <Route exact path = '/About' element = {<About  />} />
       <Route exact path = '/Form' element = {<Form  />} />
      <Route exact path = '/Shop' element = {<Shop />} />
      <Route exact path = '/Login' element = {<Login />} />
      <Route exact path='/signup' element = {<SignupForm />} />
      <Route exact path='logout' element= {<Logout />} />
      <Route exact path = '/unauthorized' element = {<Unauthorized />} />

      {/* protected routes */}
      <Route element={<RequireAuth allowedRoles={['admin', 'user']} />}>
      <Route exact path = '/MeetingRecaps' element = {<MeetingRecaps  />} />
      <Route exact path = '/NewsAndUpdates' element = {<NewsAndUpdates  />} />
       <Route exact path = '/Events' element = {<Events  />} />
        </Route>
        </Route>
        </Route>
      </Routes>
      


  );
}

export default App;
