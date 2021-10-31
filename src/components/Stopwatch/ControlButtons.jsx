import React from "react";

export default function ControlButtons({ start, stop, reset, wait, status }) {
  const handleDoubleClick = (e) => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(wait, 299, e.detail);
  };
  return (
    <div>
      {status === 0 ? (
        <div>
          <button className="stopwatch-btn stopwatch-btn-blu" onClick={start}>
            Старт
          </button>
          <button className="stopwatch-btn stopwatch-btn-yel" disabled>
            Wait
          </button>
          <button className="stopwatch-btn stopwatch-btn-yel" disabled>
            Сброс
          </button>
        </div>
      ) : (
        ""
      )}
      {status === 1 ? (
        <div>
          <button className="stopwatch-btn stopwatch-btn-red" onClick={stop}>
            Стоп
          </button>

          <button
            className="stopwatch-btn stopwatch-btn-yel"
            onClick={handleDoubleClick}
          >
            Wait
          </button>

          <button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>
            Сброс
          </button>
        </div>
      ) : (
        ""
      )}
      {status === 2 ? (
        <div>
          <button className="stopwatch-btn stopwatch-btn-blu" onClick={start}>
            start
          </button>
          <button className="stopwatch-btn stopwatch-btn-yel" disabled>
            Wait
          </button>
          <button className="stopwatch-btn stopwatch-btn-yel" disabled>
            Сброс
          </button>
        </div>
      ) : (
        ""
      )}
      {status === 3 ? (
        <div>
          <button className="stopwatch-btn stopwatch-btn-blu" onClick={start}>
            Продолжить
          </button>
          <button className="stopwatch-btn stopwatch-btn-yel" disabled>
            Wait
          </button>
          <button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>
            Сброс
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
