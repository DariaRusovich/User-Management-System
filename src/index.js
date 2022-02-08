import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/styles/ButtonsStyles.css';
import '../src/styles/CommonStyles.css';
import '../src/styles/FormStyles.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './contexts/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
