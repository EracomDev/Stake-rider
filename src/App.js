import React, { useEffect ,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';
import Register from './Pages/Register/Register';
import Register2 from './Pages/Register/Register2';
import Login from './Pages/Login/Login';
import Counter from './Pages/Counter/Counter';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import LearningFolder from './LearningFolder/LearningFolder';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  useEffect(() => {
    localStorage.setItem('currency', "$");
  }, [])
  
  return (
    <>
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/learn"   element={<LearningFolder />}></Route>
            <Route path="/login"   element={<Login />}></Route>
            <Route path="/"   element={<Register />}></Route>
            <Route path="/Register2"   element={<Register2 />}></Route>
            <Route path="/dashboard/*" end   element={<Sidebar />}></Route>
            <Route path="/counter"   element={<Counter />}></Route>
            <Route path="/forgot_password"   element={<ForgotPassword />}></Route>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </>
  );
}

export default App;