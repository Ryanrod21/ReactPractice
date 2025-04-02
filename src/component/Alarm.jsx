import { useEffect, useState } from 'react';

function Alarm() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && (minutes > 0 || seconds > 0)) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else if (minutes > 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        }
      }, 1000);
    } else if (isRunning && minutes === 0 && seconds === 0) {
      alert('Time is up');
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    if (minutes > 0 || seconds > 0) {
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div>
      {!isRunning && (
        <input
          type="number"
          placeholder="enter"
          onChange={(e) => setMinutes(parseInt(e.target.value) || 0)}
        />
      )}

      <p>
        Time Left: {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </p>

      {!isRunning ? (
        <button onClick={startTimer}>start timer</button>
      ) : (
        <button onClick={resetTimer}>reset</button>
      )}
    </div>
  );
}

export default Alarm;
