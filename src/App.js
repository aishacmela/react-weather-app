import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
  
      <Weather defaultCity={"Pretoria"}/>
        <footer>
  This page was coded by Aisha and it is  
  <a href='https://github.com/aishacmela/react-weather-app' target='_blank' rel='noopener noreferrer'>
    open-sourced
  </a>
  on GitHub
    </footer>
    </div>
  </div>
  );
}

export default App;
