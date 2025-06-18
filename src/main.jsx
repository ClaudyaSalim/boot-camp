import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import IndexPractice from './views/2502006341';


ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/2502006341' element={<IndexPractice/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);