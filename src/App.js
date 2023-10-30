import axios from 'axios';
import { useContext } from 'react';
import { AppContext } from './context/Appcontext';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Signin from './component/Signin';
import { useLocation } from 'react-router-dom';
import Liked from './component/Liked';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import './App.css'
import Notfound from './component/Notfound';

function App() {
  const { iserror } = useContext(AppContext);
  const location = useLocation();

  // Define the background style
  const backgroundStyle = location.pathname === '/signin'
    ? {
      backgroundImage: 'url("https://images.unsplash.com/photo-1515229144611-617d3ce8e108?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
    : {};
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`} style={backgroundStyle}>
      <ToastContainer />
      {/* <div className="dark-mode-toggle">
        <input
          type="checkbox"
          id="dark-mode-checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="dark-mode-checkbox"></label>
      </div> */}
      {
        iserror ? <Notfound/> : (
          <div>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='signin' element={<Signin />} />
              <Route path='liked' element={<Liked />} />
            </Routes>
          </div>
        )
      }

    </div>
  );
}

export default App;
