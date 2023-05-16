import './styles/Home.css';
import React from 'react';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className='filter-container'>
        
      </div>
      <div className='calendar-container'>
        <Calendar />
      </div>
    </div>
  );
}

export default Home;
