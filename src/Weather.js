import React from "react";
import "./Weather.css";

export default function Weather(){
    return <div className="weather">
        
        <form>
            <input type="search" placeholder="Enter city" className="search-form"/>
            <input type="submit" value="search" className="submit-form"/>
        </form>
        
        <div className="row">
            <div className="col-sm-4">
                <h4>Pretoria</h4>
                <div>
                    Wednesday
                </div>
                <h1>12:45</h1>
                <p>Sunny</p>
            
            </div>
            <div className="col-sm-4">
                < img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"></img>
            </div>
            <div className="col-sm-4">
                <ul>
                    <li>Rain: 10% </li>
                    <li>Humidity: 80% </li>
                    <li>Wind: 4 km/hr </li>
                </ul>

            </div>


        </div>
    </div>;
}