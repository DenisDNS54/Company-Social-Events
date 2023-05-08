import './styles/Home.css';
import React from 'react';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Calendar />
      {/* Add other components here */}
    </div>
  );
}

export default Home;