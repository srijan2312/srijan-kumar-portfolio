
"use client";

import { useEffect, useState } from "react";

const COUNT_DURATION = 1000;
const EXIT_DURATION = 650;

export function CinematicLoader() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(3);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Respect reduced-motion preferences.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Display 3, then 2, then 1.
    timers.push(
      setTimeout(() => setCount(2), COUNT_DURATION),
      setTimeout(() => setCount(1), COUNT_DURATION * 2),

      // Begin fading after the countdown.
      setTimeout(() => setExiting(true), COUNT_DURATION * 3),

      // Remove the loader after the fade transition.
      setTimeout(
        () => setVisible(false),
        COUNT_DURATION * 3 + EXIT_DURATION
      )
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  if (!visible) return null;

  const progress = exiting ? 100 : ((3 - count) / 3) * 100;

  return (
    <div
      className={`cinematic-loader${exiting ? " cinematic-loader--exit" : ""}`}
      aria-hidden="true"
    >
      <div className="loader-glow" />

      <div className="loader-content" key={count}>
        <div className="loader-number">{count}</div>

        <div className="loader-wordmark">Srijan Kumar</div>

        <div className="loader-caption">
          FULL-STACK SOFTWARE ENGINEER
        </div>
      </div>

      <div className="loader-progress">
        <span
          className="loader-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
