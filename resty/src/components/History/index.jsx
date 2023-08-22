import React from 'react';

const History = ({ history, onSelectHistory }) => {
  return (
    <div>
      <h2>History</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index} onClick={() => onSelectHistory(entry.results)}>
            {entry.method} {entry.url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
