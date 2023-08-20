import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/form/index';
import Results from './components/results/index'; 
import Header from './components/header/index';
import Footer from './components/footer/index';
import './app.scss';

function App() {
  const [request, setRequest] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (request) {
      axios({
        method: request.method,
        url: request.url,
        data: request.body,
      })
        .then((res) => {
          setResponse(res.data);
        })
        .catch((error) => {
          setResponse({ error: error.message });
        });
    }
  }, [request]);

  const handleFormSubmit = (requestData) => {
    setRequest(requestData);
    setResponse(null); 
  };

  return (
    <div>
      <Header/>
      <Form onSubmit={handleFormSubmit} />
      {response && <Results data={response} />}
      <Footer/>
    </div>
  );
}

export default App;
