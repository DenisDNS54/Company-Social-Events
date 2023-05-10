import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Settings from './Settings';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="form">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;