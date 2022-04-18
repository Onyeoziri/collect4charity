import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className = 'semi-circle'></div>
      <Router>
        <Navbar/>
      </Router> 
    </div>
  );
}

export default App;
