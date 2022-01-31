import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/styles/ButtonsStyles.css';
import '../src/styles/CommonStyles.css';
import '../src/styles/FormStyles.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ModalWindowProvider from './contexts/ModalWindowContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalWindowProvider>
        <App />
      </ModalWindowProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
