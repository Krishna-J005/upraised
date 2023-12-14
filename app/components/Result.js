"use client"
import { useState, useEffect } from 'react';

const CircularResult = ({ percentage }) => {
    const strokeWidth = 20; // Width of the progress bar
    const outerStrokeWidth = 30;
    const radius = 50 - strokeWidth / 2; // Radius of the circle
    const outerRadius = 160 - outerStrokeWidth/2;
    // Calculate the circumference of the circle
    const circumference = 2 * Math.PI * radius;
    const outerCircumference = 2 * Math.PI * outerRadius;
    // Calculate the offset based on the percentage
    const offset = circumference - percentage * circumference;
    const outerOffset = outerCircumference - (percentage/100) * outerCircumference;

    return (
        <svg width="340" height="340" viewBox="0 0 320 320">
            <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
                <stop offset="33%" stop-color="#44B77B"></stop>
                <stop offset="66%" stop-color="#FFD033"></stop>
                <stop offset="100%" stop-color="#FF3B3F"></stop>
            </linearGradient>
            <circle
                cx="160"
                cy="160"
                r={outerRadius}
                fill="#ffffff"
                // stroke={percentage > 60 ? 'green': 'red'} // Background color
                stroke="url(#linearColors)"
                strokeWidth={outerStrokeWidth}
                strokeDasharray={outerCircumference}
                strokeDashoffset={outerOffset}
                strokeLinecap="round"
            />
            <circle
                cx="160"
                cy="160"
                r={outerRadius-20}
                fill="#ffffff"
                stroke="#ffffff" // Background color
                strokeWidth={10}
            />
            <circle
                cx="160"
                cy="160"
                r={outerRadius-25}
                fill="#ffffff"
                stroke="#EBEDF5" // Progress color
                strokeWidth={1}
            />
            <text x="170" y="170" className='text-4xl' textAnchor="middle" dy="7" fill="#000000">
                {percentage}%
            </text>
        </svg>
    );
};

export default CircularResult;
