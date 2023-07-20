import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing';
import About from './pages/About'
import Form from './pages/Form';
import Shop from './pages/Shop';
import MeetingRecaps from './pages/MeetingRecaps';
import Events from './pages/Events';
import NewsAndUpdates from './pages/NewsAndUpdates';
import Login from './pages/Login';

function App({req}) {
  return (
   <Router>
      <Routes>
      <Route exact path = '/' element = {<Landing req={req} />} />
      <Route exact path = '/About' element = {<About req={req} />} />
       <Route exact path = '/Form' element = {<Form req={req} />} />
      <Route exact path = '/Shop' element = {<Shop req={req} />} />
      <Route exact path = '/MeetingRecaps' element = {<MeetingRecaps req={req} />} />
      <Route exact path = '/NewsAndUpdates' element = {<NewsAndUpdates req={req} />} />
      <Route exact path = '/Events' element = {<Events req={req} />} />
       <Route exact path = '/Login' element = {<Login />} />

      </Routes>
    </Router>


  );
}

export default App;
