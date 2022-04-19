import './App.css';
import {Navbar} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, About, Services, Charities} from './pages';

const PagesNotFound =() =>(
  <div>404!</div>
) 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={Home} />
          <Route path='/about' element={About} />
          <Route path='/services' element={Services} />
          <Route path='/cherities' element={Charities} />
        </Routes>
      </Router>
      <Home /> 
      <span className = 'semi-circle'></span>
    </div>
  );
}

export default App;
