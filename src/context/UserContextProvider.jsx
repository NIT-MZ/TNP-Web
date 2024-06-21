import React, { useState, useEffect} from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({ children }) => {
  const [count, setCount] = useState(new Array(4).fill(0)); // Initialize count as an array
  const list = [86, 96, 14.5, 19]; // List of target values

  useEffect(() => {
    const timers = [];

    list.forEach((value, index) => {
      if (count[index] < value) {
        const timer = setInterval(() => {
          setCount(prevCount => {
            const newCount = [...prevCount];
            const step = value > 1 ? 1 : 0.1; // Determine the step size based on the value
            newCount[index] = parseFloat((newCount[index] + step).toFixed(1)); // Increment and ensure one decimal place

            // Check if reached or exceeded the target value, then clear the interval
            if (newCount[index] >= value) {
              clearInterval(timer);
              newCount[index] = value; // Ensure exact target value
            }

            return newCount;
          });
        }, 20); // Adjust the interval as needed

        timers.push(timer);
      }
    });

    return () => timers.forEach(timer => clearInterval(timer)); // Clean up all intervals
  }, [count, list]);

  return (
    <UserContext.Provider value={{ count }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
