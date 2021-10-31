import React, { useState, useEffect } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import ControlButtons from "./ControlButtons";
import Timer from "./Timer";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const unsubscribe$ = new Subject();
    interval(1000)
      .pipe(takeUntil(unsubscribe$))
      .subscribe(() => {
        if (isActive) {
          setTime((val) => val + 1);
        }
      });
    return () => {
      unsubscribe$.next();
      unsubscribe$.complete();
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
    setStatus(1);
  };

  const handleStop = () => {
    setIsActive(false);
    setTime(0);
    setStatus(2);
  };

  const handleWait = (e) => {
    console.log(e);
    if (e !== 2) {
      return;
    }
    setIsActive(false);
    setStatus(3);
  };

  const handleReset = () => {
    setTime(0);
    setIsActive(true);
    setStatus(1);
  };
  return (
    <div className="stopwatch">
      <Timer time={time} />
      <ControlButtons
        start={handleStart}
        stop={handleStop}
        reset={handleReset}
        wait={handleWait}
        status={status}
      />
    </div>
  );
}
