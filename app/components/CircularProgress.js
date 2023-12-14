"use client"
import { useState, useEffect } from 'react';

const CircularProgress = ({ currentQuestion, totalQuestions }) => {
  const [percentage, setPercentage] = useState(0)
  const strokeWidth = 8; // Width of the progress bar
  const radius = 50 - strokeWidth / 2; // Radius of the circle

  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * radius;
  useEffect(() =>{
    let percentageValue = (currentQuestion / totalQuestions);
    setPercentage(percentageValue)
  }, [currentQuestion, totalQuestions])

  // Calculate the offset based on the percentage
  const offset = circumference - percentage * circumference;

  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="#ffffff"
        stroke="#ffffff" // Background color
        strokeWidth={strokeWidth}
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="#44B77B" // Progress color
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text x="50" y="50" className='text-2xl font-bold' textAnchor="middle" dy="7" fill="#000000">
        {currentQuestion}
      </text>
      <text x="64" y="57" className='text-sm font-bold' textAnchor="middle" fill='#999999'>
          /{totalQuestions}
      </text>
    </svg>
  );
};

export default CircularProgress;
