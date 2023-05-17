
import React from 'react'
import './styles/App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login_component'
import SignUp from './components/signup_component'
import UserDetails from './components/userDetails'
import ImageUpload from './components/imageUpload.'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          
        </div>
      </div>
    </Router>
  )
}

export default App

// app pentru log in register

