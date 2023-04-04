import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateProvider } from './context/index/StateProvider';
import reducer, { initialState } from './context/index/reducer';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);


