import './App.css';
import {Navbar} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, About, Services, Charities, Login, ErrorPage} from './pages';

const PagesNotFound =() =>(
  <div>404!</div>
) 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/charities' element={<Charities />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        
      </Router>
      
      <span className = 'semi-circle'></span>
    </div>
  );
}

export default App;
