import React from "react";

const History = ({ history, timerSettings }) => {
  return (
    <div>
      <h2>Timer History</h2>
      {history.length === 0 ? (
        <p>No history yet.</p>
      ) : (
        <div>
          <p>Timer Settings:</p>
          <ul>
            <li>Work Minutes: {timerSettings.workMinutes}</li>
            <li>Break Minutes: {timerSettings.breakMinutes}</li>
          </ul>
          <ul>
            {history.map((mode, index) => (
              <li key={index}>{mode}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default History;
