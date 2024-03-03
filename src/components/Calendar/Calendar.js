// src/components/Calendar/Calendar.js

import React, { useState, useEffect } from 'react';
import { getPrayerTimes } from '../../services/api';

function Calendar() {
  const [prayerTimes, setPrayerTimes] = useState([]);

  useEffect(() => {
    // Fetch and set prayer times data
    getPrayerTimes(2022, 3, 51.508515, -0.1254872, 2)
      .then((data) => setPrayerTimes(data.data));
  }, []);

  return (
    <div className="calendar-container">
      <h2>Prayer Times Calendar</h2>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Fajr</th>
            <th>Dhuhr</th>
            <th>Asr</th>
            <th>Maghrib</th>
            <th>Isha</th>
          </tr>
        </thead>
        <tbody>
          {prayerTimes.map((day) => (
            <tr key={day.date.gregorian}>
              <td>{day.date.gregorian}</td>
              <td>{day.timings.Fajr}</td>
              <td>{day.timings.Dhuhr}</td>
              <td>{day.timings.Asr}</td>
              <td>{day.timings.Maghrib}</td>
              <td>{day.timings.Isha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
