import './styles/Home.css';
import React from 'react';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import Filters from './components/Filters';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className='filter-container'>
        <Filters />
      </div>
      <div className='calendar-container'>
        <div className='calendar-wrapper'>
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default Home;
