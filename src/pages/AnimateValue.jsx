import React, { useState, useEffect } from "react";

const AnimateValue = ({ start, end, duration }) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    const animateValue = (start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setValue(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateValue(start, end, duration);
  }, [start, end, duration]);

  return <span>{value}</span>;
};

export default AnimateValue;
