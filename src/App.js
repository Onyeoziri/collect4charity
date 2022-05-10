import './App.css';
import {Navbar} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, About, Services, Charities, Login, ErrorPage} from './pages';
//import DashBorad from './pages/Profiles/Admin Profile/DashBoard/Dashboard'
import {DashBoard_A, DashBoard_U} from './pages/Profiles'


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

          <Route path='/a/dashboard' element={<DashBoard_A />} />

          <Route path='/u/dashboard' element={<DashBoard_U />} />

          <Route path='*' element={<ErrorPage />} />

          
        </Routes>
        
      </Router>
      
      <span className = 'semi-circle'></span>
    </div>
  );
}

export default App;
