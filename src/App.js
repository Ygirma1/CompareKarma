import React, { useState,useEffect }  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about/about';
import Login from './pages/login/login';
import Search from './pages/search/search';
import Register from './pages/register/register';
import BusinessPost from './pages/businessPost/businessPost';
import Profile from './pages/profile';

function App() {
    const [currentForm, setCurrentForm] = useState('login');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleLogin = () => {
        //setIsLoggedIn(true);
        sessionStorage.setItem('isLoggedIn', true);
        console.log('App isLoggedIn:', isLoggedIn);
      };

    
    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
     
    useEffect(() => {
        const loggedIn = sessionStorage.getItem('isLoggedIn');
        setIsLoggedIn(loggedIn === 'true');
      }, []);
      
    return (
        <> 
        <Router>
            <Navbar isLoggedIn={isLoggedIn}/>
            
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/search' element={<Search/>} />
                {isLoggedIn && (
            <Route path="/post" element={<BusinessPost />} />
          )}
                <Route path='/login' element={currentForm === "login" ? <Login onFormSwitch={toggleForm} onLogin={handleLogin} setIsLoggedIn={setIsLoggedIn}/> : <Register onFormSwitch={toggleForm} onLogin={handleLogin} />} /> 
            </Routes>
        </Router>
        </>
    );
};

export default App;
