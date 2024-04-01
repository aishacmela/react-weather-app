import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
  
      <Weather />

      <footer>
        this page was coded by aisha and it is <a href='https://github.com/aishacmela/react-weather-app' target='_blank'>open-sourced</a> on Github
      </footer>
      </div>
    </div>
  );
}

export default App;
