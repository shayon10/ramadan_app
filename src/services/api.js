// src/services/api.js

const BASE_URL = 'http://api.aladhan.com/v1';

// Function to get prayer times for a specific month
export const getPrayerTimes = (year, month, latitude, longitude, method) => {
  const url = `${BASE_URL}/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&method=${method}`;
  return fetch(url).then((response) => response.json());
};

// Additional API functions for Hijri calendar, Quran reading, etc.
// Add functions based on your project's requirements

// Function to get Hijri calendar for a specific month
export const getHijriCalendar = (year, month, latitude, longitude, method) => {
  const url = `${BASE_URL}/hijriCalendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&method=${method}`;
  return fetch(url).then((response) => response.json());
};

// Function to get other data based on your project's needs
