import "./styles/App.css"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Settings from './Settings';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { createContext, useEffect, useState, useContext } from "react";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "./config/themeContext";
import theme from "./config/theme";

export const ThemeContext = createContext(null);

function App() {
  // const [theme, setTheme] = useState("light");

  // const toggleTheme=() => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };

  const [theme, setTheme] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
      setTheme(data);
    });
    return () => {
      EventRegister.removeEventListener(eventListener);
    }
  })

  return (
    <ThemeContext.Provider value={theme === "true" ? theme.dark : theme.light}>
      <div className="App" id={theme}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/settings" element={<Settings />}/>
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;