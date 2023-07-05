import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing';
import About from './pages/About'
import Form from './pages/Form';
import Shop from './pages/Shop';

function App() {
  return (
   <Router>
      <Routes>
      <Route exact path = '/' element = {<Landing />} />
      <Route exact path = '/About' element = {<About />} />
       <Route exact path = '/Form' element = {<Form />} />
      <Route exact path = '/Shop' element = {<Shop />} />
      {/* <Route exact path = '/MembersLogin' element = {<MembersLogin />} /> */}

      </Routes>
    </Router>


  );
}

export default App;
