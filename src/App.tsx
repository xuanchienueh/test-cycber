import React from 'react';
import './App.css'
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import Home from './pages/home/home'
import HomeTemplate from './templates/homeTemplate/HomeTemplate';
import Detail from './pages/detail/Detail';
import Register from './pages/register/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<HomeTemplate />} >
          <Route path='' element={<Home />} />
          <Route path='detail/:idProduct' element={<Detail />} />
          <Route path='register' element={<Register />} />
        </Route>

        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
