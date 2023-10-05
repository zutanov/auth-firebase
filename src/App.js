import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import MainPage from 'pages/MainPage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';

function App() {
  return (

      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
      </Routes>

  );
}

export default App;
