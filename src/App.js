import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import { BrowserRouter  as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';
import Detect from './Pages/Detect';
import Contact from './Pages/Contact';
import NavBar from './components/NavBar';
import About from './Pages/About';
import {AuthContext} from './authcontext/AuthContext'
function App() {

  const [loading,setloading]=useState(false)
  const toogleloading=()=>{
    console.log("working....")
    setloading(prev=>!prev)
  }
  return (
    
   <div className='App' >
      <AuthContext.Provider 
        value={{
        loading:loading,
        toogleloading:toogleloading,
      }} >
        <Router>
          <NavBar />
        
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/detect" element={<Detect />} />
            <Route  path="/about" element={ <About /> } />
          </Routes>
      
        </Router>

        </AuthContext.Provider> 

        </div>  
   
  );
}

export default App;
