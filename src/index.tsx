import React from 'react';
import ReactDOM from 'react-dom/client';
import './init';
import { App } from './pages/mainPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
