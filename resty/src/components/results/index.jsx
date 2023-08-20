import React from 'react';
import ReactJson from 'react-json-view';
import './result.scss';

function Results({ data }) {
  const paginationData = data.next || {}; 

  console.log("paginationData.next:", paginationData.next);
  console.log("paginationData.previous:", paginationData.previous);
  console.log("data:", data.next); 

  return (
    <div className="results">
      <h2>Response Data:</h2>
      <ReactJson src={data} theme="monokai" />
      {paginationData.next && (
        <button onClick={() => window.location.href = paginationData.next}>
          Next Page
        </button>
      )}
      {paginationData.previous && (
        <button onClick={() => window.location.href = paginationData.previous}>
          Previous Page
        </button>
      )}
      {paginationData.count && (
        <p>Total Count: {paginationData.count}</p>
      )}
    </div>
  );
}

export default Results;
