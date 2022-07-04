import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import FAQ from './Pages/FAQ/FAQ';
import Presence from './Pages/Presence/Presence';
import Tasks from './Pages/Tasks/Tasks';
import Error404 from './Pages/404/404';
import Login from './Pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="task" element={<Tasks />} />
            <Route path='presence' element={<Presence/>}/>
            <Route path='login' element={<Login/>}/>
          </Route>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);