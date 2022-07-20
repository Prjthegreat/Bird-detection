import logo from './logo.svg';
import './App.css';
import { BrowserRouter  as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';
import Detect from './Pages/Detect';
import Contact from './Pages/Contact';
import NavBar from './components/NavBar';
import About from './Pages/About';
function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
        
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/detect" element={<Detect />} />
            <Route  path="/about" element={ <About /> } />
          </Routes>
      
        </Router>
    </div>
  );
}

export default App;
