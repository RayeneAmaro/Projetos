import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './todo/style.css'
import Todolist from './Todolist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todolist/>
  </React.StrictMode>
);