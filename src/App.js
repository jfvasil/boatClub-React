import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing';
import About from './pages/About'



function App() {
  return (
   <Router>
      <Routes>
      <Route exact path = '/' element = {<Landing />} />
      <Route exact path = '/About' element = {<About />} />
      {/* <Route exact path = '/Form' element = {<Form />} />
      <Route exact path = '/News' element = {<News />} />
      <Route exact path = '/MembersLogin' element = {<MembersLogin />} /> */} */}

      </Routes>
    </Router>


  );
}

export default App;
