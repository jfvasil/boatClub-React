import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing';




function App() {
  return (
   <Router>
      <Routes>
      <Route exact path = '/' element = {<Landing />} />
      {/* <Route exact path = '/About' element = {<About />} />
      <Route exact path = '/Form' element = {<Form />} />
      <Route exact path = '/News' element = {<News />} />
      <Route exact path = '/Admin' element = {<Admin />} /> */}

      </Routes>
    </Router>


  );
}

export default App;
