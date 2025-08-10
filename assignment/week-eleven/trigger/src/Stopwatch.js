import React, { useState, useEffect, useRef } from "react";

const beepSoundUrl = "https://www.soundjay.com/button/beep-07.mp3";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [target, setTarget] = useState(10);
  const audioRef = useRef(null);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }

    // Cleanup on unmount or when isRunning changes
    return () => clearInterval(interval);
  }, [isRunning]);

  // Play sound or log when target reached
  useEffect(() => {
    if (seconds === Number(target)) {
      if (audioRef.current) {
        audioRef.current.play();
      } else {
        console.log("Target time reached!");
      }
      setIsRunning(false); // stop automatically when target reached
    }
  }, [seconds, target]);

  const handleStart = () => {
    if (seconds >= target) {
      setSeconds(0); // reset if already at or past target
    }
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const handleTargetChange = (e) => {
    const val = e.target.value;
    if (val === "" || /^[0-9\b]+$/.test(val)) {
      setTarget(val === "" ? "" : Number(val));
    }
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", marginTop: 50 }}>
      <h1>Stopwatch</h1>
      <div style={{ fontSize: "48px", marginBottom: "20px" }}>{seconds}s</div>

      <div style={{ marginBottom: 20 }}>
        <label>
          Set Target Time (seconds):{" "}
          <input
            type="number"
            min="1"
            value={target}
            onChange={handleTargetChange}
            style={{ width: 60 }}
          />
        </label>
      </div>

      <button onClick={handleStart} disabled={isRunning || seconds >= target}>
        Start
      </button>{" "}
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>{" "}
      <button onClick={handleReset}>Reset</button>

      {/* Audio element for beep sound */}
      <audio ref={audioRef} src={beepSoundUrl} />
    </div>
  );
}

export default Stopwatch;
