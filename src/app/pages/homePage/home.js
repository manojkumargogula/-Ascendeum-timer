import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [timerStatus, setTimerStatus] = useState("START");

  useEffect(() => {
    if (timerStatus == "START") {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
    if (timerStatus == "RESET") {
      setSeconds(0)
    }

    if (timerStatus == "COUNTDOWN" && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timerStatus, seconds]);

  const handleStart = () => {
    setTimerStatus("START")
  }
  const handleStop = () => {
    setTimerStatus("STOP")

  }
  const handleReset = () => {
    setTimerStatus("RESET")

  }
  const handleCountDown = () => {
    setTimerStatus("COUNTDOWN")

  }
  const formatTime = time => {

    const minutes = Math.floor(time / 60);
    const hours = Math.floor(minutes / 60)
    const seconds = time % 60;

    return `${hours}:${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="w-[40vw] h-[10vh] border-bluebg border-1 rounded-8 flex justify-center items-center ">
          <div className="text-24 font-700 ">{formatTime(seconds)}</div>
        </div>
        <div className="flex flex-row my-[4vh]">
          <div>
            <button onClick={handleStart} className="mx-[2vw] border-1 border-b-orangeText p-[1vw] rounded-8 hover:scale-105 shadow-5 ">Start</button>
          </div>
          <div>
            <button onClick={handleStop} className="mx-[2vw] border-1 border-b-orangeText p-[1vw] rounded-8  hover:scale-105 shadow-5">Pause</button>
          </div>
          <div>
            <button onClick={handleReset} className="mx-[2vw] border-1 border-b-orangeText p-[1vw] rounded-8 hover:scale-105 shadow-5">Reset</button>
          </div>
          <div>
            <button onClick={handleCountDown} className="mx-[2vw] border-1 border-b-orangeText p-[1vw] rounded-8 hover:scale-105 shadow-5">Countdown</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Timer;
