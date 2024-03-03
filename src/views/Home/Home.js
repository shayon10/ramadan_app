// src/views/Home/Home.js

import React from 'react';
import Calendar from '../../components/Calendar/Calendar';
import PrayerTimes from '../../components/PrayerTimes/PrayerTimes';
import QuranReading from '../../components/QuranReading/QuranReading';
import HadithTips from '../../components/HadithTips/HadithTips';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Ramadan App</h1>
      <div className="section-container">
        <Calendar />
      </div>
      <div className="section-container">
        <PrayerTimes />
      </div>
      <div className="section-container">
        <QuranReading />
      </div>
      <div className="section-container">
        <HadithTips />
      </div>
    </div>
  );
}

export default Home;
