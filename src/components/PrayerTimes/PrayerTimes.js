// src/components/PrayerTimes/PrayerTimes.js

import React, { useState, useEffect } from 'react';
import { getPrayerTimes } from '../../services/api';

function PrayerTimes() {
  const [todayPrayerTimes, setTodayPrayerTimes] = useState({});

  useEffect(() => {
    // Fetch and set today's prayer times
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    getPrayerTimes(year, month, 51.508515, -0.1254872, 2)
      .then((data) => {
        const todayData = data.data.find(dayData => dayData.date.gregorian.day === day);
        setTodayPrayerTimes(todayData.timings);
      });
  }, []);

  return (
    <div className="prayer-times-container">
      <h2>Today's Prayer Times</h2>
      <ul>
        <li>Fajr: {todayPrayerTimes.Fajr}</li>
        <li>Dhuhr: {todayPrayerTimes.Dhuhr}</li>
        <li>Asr: {todayPrayerTimes.Asr}</li>
        <li>Maghrib: {todayPrayerTimes.Maghrib}</li>
        <li>Isha: {todayPrayerTimes.Isha}</li>
      </ul>
    </div>
  );
}

export default PrayerTimes;
