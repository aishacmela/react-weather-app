import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){

    const[weather, setWeather] = useState ({});
    const[load, setLoad] = useState(false)

   
    function handleResponse(response){
       setWeather({
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
        pressure: response.data.temperature.pressure,
        city: response.data.city,
        icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"

       });
       setLoad(true);
        console.log(response.data);
     
    
    }
   
    
    if (load) { 
        return (
        <div className="weather">
        
        <form>
            <input type="search" placeholder="Enter city" autoFocus="on" className="search-form col-8 shadow "/>
            <input type="submit" value="search" className="submit-form col-3"/>
        </form>
        
        <div className="row mt-5">
            <div className="col-sm-4 text-center">
                <h2 className="text-capitalize">{weather.city}</h2>
                <p>
                    Wednesday
                </p>
                <h1>12:45</h1>
                <p className="text-capitalize">{weather.description}</p>
            
            </div>
            <div className="col-sm-4 text-center">
                <img src={weather.icon} alt={weather.description}/>
            </div>
            <div className="col-sm-4 text-center">
                <ul>
                    <li>Pressure: <strong>{weather.pressure}</strong> </li>
                    <li>Humidity: <strong>{weather.humidity}%</strong> </li>
                    <li>Wind: <strong>{weather.wind} km/hr</strong> </li>
                </ul>
                <span className="temperature">{Math.round(weather.temperature)}</span>
                <span className="unit">°C|F</span>

            </div>


        </div>
    </div>);
        
    } else { 
    let apiKey = `4ce023e4f48aaf8bd6a4cb7eo6dbd3ft`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";

        
    }
 
   

    }
   
   
