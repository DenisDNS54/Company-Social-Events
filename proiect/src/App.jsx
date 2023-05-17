
import React from 'react'
import './styles/App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login_component'
import SignUp from './components/signup_component'
import Settings from './Settings'
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/settings" element={<Settings />}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>        
      </div>
    </Router>
  );
}

export default App
