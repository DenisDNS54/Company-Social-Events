import "./styles/App.css"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Settings from './Settings';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { createContext, useEffect, useState, useContext } from "react";
import { ThemeContextProvider, useThemeContext } from "./context/ThemeContext";

function App() {
  const {contextTheme, setContextTheme} = useThemeContext()

    const [checked, setChecked] = useState(false)
    const handleSwitch = (nextChecked) => {
        setContextTheme((state) => (state === "light" ? "dark" : "light"))
        setChecked(nextChecked)
    };

  return (
    <ThemeContextProvider>
      <div className="App" id={contextTheme}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/settings" element={<Settings />}/>
          </Routes>
        </Router>
      </div>
    </ThemeContextProvider>
  );
}

export default App;