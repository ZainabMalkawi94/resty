import React, { useState } from 'react';
import './form.scss';

function Form({ onSubmit }) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ url, method, body });
  };

  return (
  <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <div>
        <button
          type="button"
          onClick={() => setMethod('GET')}
          className={method === 'GET' ? 'active' : ''}
        >
          GET
        </button>
        <button
          type="button"
          onClick={() => setMethod('POST')}
          className={method === 'POST' ? 'active' : ''}
        >
          POST
        </button>
        <button
          type="button"
          onClick={() => setMethod('PUT')}
          className={method === 'PUT' ? 'active' : ''}
        >
          PUT
        </button>
        <button
          type="button"
          onClick={() => setMethod('DELETE')}
          className={method === 'DELETE' ? 'active' : ''}
        >
          DELETE
        </button>
      </div>
      {(method === 'PUT' || method === 'POST') && (
        <textarea
          placeholder="Request Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

  
