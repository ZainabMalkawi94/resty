import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Form from './components/form/index';
import Results from './components/results/index';
import History from './components/History/index';
import Header from './components/header/index';
import Footer from './components/footer/index';
import './app.scss';
// import { apiCall } from '../utils/api';


const initialState = {
  loading: false,
  results: null,
  history: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_RESULTS':
      return { ...state, results: action.payload };
    case 'ADD_TO_HISTORY':
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
};


function App() {
  const [request, setRequest] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (request) {
      dispatch({ type: 'SET_LOADING', payload: true });
      axios({
        method: request.method,
        url: request.url,
        data: request.body,
      })
        .then((res) => {
          dispatch({ type: 'SET_RESULTS', payload: res.data });
          dispatch({ type: 'ADD_TO_HISTORY', payload: { method: request.method, url: request.url, results: res.data } });
        })
        .catch((error) => {
          dispatch({ type: 'SET_RESULTS', payload: { error: error.message } });
        })
        .finally(() => {
          dispatch({ type: 'SET_LOADING', payload: false });
        });
    }
  }, [request]);

  const handleFormSubmit = (requestData) => {
    setRequest(requestData);
  };

  return (
    <div>
      <Header />
      <Form onSubmit={handleFormSubmit} />
      <History history={state.history} onSelectHistory={(results) => dispatch({ type: 'SET_RESULTS', payload: results })} />
      <Results results={state.results} loading={state.loading} />
      <Footer />
    </div>
  );
}

export default App;
