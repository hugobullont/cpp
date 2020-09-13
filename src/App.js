import React from 'react';
import NoCPPPlayer from './components/NoCPPPlayer';
import LoginPage from './components/loginPage/LoginPage'
import './App.scss';



function App() {
  return (
    <div className="App">
      <div className="container">
        <LoginPage/>
      </div>  
    </div>
  );
}

export default App;
