import React from "react";
import FormattedDate from "./FormattedDate";
import CityTemperature from "./CityTemperature.js";
import WeatherForecast from "./WeatherForecast.js";

export default function WeatherInfo(props){
   return(
    <div className="weatherInfo">
     <div className="row mt-5">
            <div className="col-sm-4 text-center">
                <h2 className="text-capitalize">{props.data.city}</h2>
               <FormattedDate date={props.data.date}/>
                <p className="text-capitalize">{props.data.description}</p>
            
            </div>
            <div className="col-sm-4 text-center">
            <img src={props.data.icon} alt=""></img>
             </div>
            <div className="col-sm-4 text-center " >
                <ul>
                    <li>Pressure: <strong>{props.data.pressure}</strong> </li>
                    <li>Humidity: <strong>{props.data.humidity}%</strong> </li>
                    <li>Wind: <strong>{props.data.wind} km/hr</strong> </li>
                </ul>
                <CityTemperature celsius={props.data.temperature}/>
            </div>
                <WeatherForecast />
        </div>
</div>
   );

    
}