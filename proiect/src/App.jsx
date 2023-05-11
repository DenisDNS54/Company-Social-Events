import "./styles/App.css"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Settings from './Settings';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme=() => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider>
      <div className="App" id={theme}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;