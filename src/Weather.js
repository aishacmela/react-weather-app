import React from "react";
import "./Weather.css";

export default function Weather(){
    return <div className="weather">
        
        <form>
            <input type="search" placeholder="Enter city" autoFocus="on" className="search-form col-8 shadow "/>
            <input type="submit" value="search" className="submit-form col-3"/>
        </form>
        
        <div className="row mt-5">
            <div className="col-sm-4 text-center">
                <h2>Pretoria</h2>
                <p>
                    Wednesday
                </p>
                <h1>12:45</h1>
                <p>Sunny</p>
            
            </div>
            <div className="col-sm-4 text-center">
                < img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"></img>
            </div>
            <div className="col-sm-4 text-center">
                <ul>
                    <li>Rain: <strong>10%</strong> </li>
                    <li>Humidity: <strong>80%</strong> </li>
                    <li>Wind: <strong>4 km/hr</strong> </li>
                </ul>
                <span className="temperature">20</span>
                <span className="unit">°C|F</span>

            </div>


        </div>
    </div>;
}