import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props){

    const[weather, setWeather] = useState ({});
    const[load, setLoad] = useState(false);
    const[city, setCity] = useState(props.defaultCity)

   
    function handleResponse(response){
       setWeather({
        temperature: response.data.temperature.current,
        city:response.data.city,
        wind: response.data.wind.speed,
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
        pressure: response.data.temperature.pressure,
        icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
        date: new Date(response.data.time *1000)

       });
       setLoad(true);
       console.log(response.data)
    }

    function search(){
    let apiKey = `4ce023e4f48aaf8bd6a4cb7eo6dbd3ft`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event){
        event.preventDefault(); 
        search()
    }
    function handleChangeCity(event) {
        setCity(event.target.value);
    }
  
    
    if (load) { 
        return (
        <div className="weather">   
        <form onSubmit={handleSubmit}>
            <input  type="search" 
                    placeholder="Enter city"  
                    autoFocus="on" 
                    className="search-form col-8 shadow"
                    onChange={handleChangeCity}
                    />
            <input type="submit" 
            value="search" 
            className="submit-form col-3"
            
            />
        </form>
        <WeatherInfo data={weather} />
        </div>);
        
    } else { 
    search();
    return "Loading";    

        
    }
}
   
   
