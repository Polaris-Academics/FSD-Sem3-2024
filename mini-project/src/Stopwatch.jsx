import React , {useState,useEffect} from 'react'
import './App.css'

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [lap, setLap] = useState([]);

    useEffect(() => {
        let interval = null;
        if(isRunning){
            interval = setInterval(() => {
                setTime(prev => prev+10)
            },10)
        }

        return () => clearInterval(interval);
    },[isRunning])

    const formatTime = (time) => {
        let milliseconds = Math.floor((time % 1000) / 10);
        let seconds = Math.floor((time / 1000) % 60);
        let minutes = Math.floor(time / 60000);
        return {milliseconds, seconds, minutes}
    }


    const toggleStart = () => {
        setIsRunning(prev => !prev);
    }
    const toggleReset = () => {
        setIsRunning(false);
        setTime(0);
        setLap([]);
    }
    const lapButton = () => {
        if(time !== 0 )
            setLap(prev => [...prev, formatTime(time)]);
    }

  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">


<div className="text-3xl font-mono font-semibold mb-8">
  {(() => {
    const formattedTime = formatTime(time);
    return (
      <>
        {formattedTime.minutes.toString().padStart(2, '0')} :{" "}
        {formattedTime.seconds.toString().padStart(2, '0')} :{" "}
        {formattedTime.milliseconds.toString().padStart(2, '0')}
      </>
    );
  })()}
</div>


<div className="flex space-x-4">
  <button onClick={toggleStart} className="btn-stopwatch">
    {isRunning ? "Pause" : "Start"}
  </button>
  <button onClick={toggleReset} className="btn-stopwatch">
    Reset
  </button>
  <button onClick={lapButton} className="btn-stopwatch">
    Lap
  </button>
</div>


{lap.length > 0 &&<div className="mt-6 space-y-2 shadow-md bg-white p-8 rounded-md">
  {lap.map((l, i) => (
    <div key={i} className="font-mono text-lg ">
      {l.minutes.toString().padStart(2, '0')} :{" "}
      {l.seconds.toString().padStart(2, '0')} :{" "}
      {l.milliseconds.toString().padStart(2, '0')}
    </div>
  ))}
</div>}
</div>
  )
}

export default Stopwatch