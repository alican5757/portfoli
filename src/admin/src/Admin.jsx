// App.jsx

import React from 'react';
import '../../App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './admincomponents/sidebar/Sidebar';
import Header from './admincomponents/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/Aboutnew'; 

function App() {
  return (
    <div className="app">
      <div className='sidebar__contact'>
        <Sidebar />
      </div>
      <div className="content">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Diğer sayfa bileşenlerini burada tanımlayabilirsiniz */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
