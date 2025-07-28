import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const intervalRef = useRef(null); // To store the interval ID

  const startTimer = () => {
    if (intervalRef.current) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000); // Increment time every second
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // Reset the interval reference
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // Reset the interval reference
    setTime(0); // Reset the time to zero
  };

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.time}>{formatTime(time)}</h1>
      <div>
        <button style={styles.button} onClick={startTimer}>
          Start
        </button>
        <button style={styles.button} onClick={stopTimer}>
          Stop
        </button>
        <button style={styles.button} onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height for vertical centering
    margin: 0, // Remove default margin
    textAlign: 'center',
  },
  time: {
    fontSize: '48px',
    fontWeight: 'bold',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default Stopwatch;
