import { useState, useEffect } from 'react';
import '../output.css'

const Api = () => {
    const [results, setResults] = useState(null)
    const [long, setLong] = useState(null)
    const [lat, setLat] = useState(null)

    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showLocation)
        }else{
            alert("geolocation is not supported on this device")
        }
    }
    function showLocation(position){
        setLong(position.coords.longitude)
        setLat(position.coords.latitude)
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8369418bc7da331b03b144d779c0ec81`;

    useEffect(() => {
       getLocation()
    })

    function getWeather(){
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //setResults(JSON.stringify(data.weather))
            setResults(data)
        })
        .catch(err => console.log(err))

       
    }
    
    return (
        <div>
            <button className="bg-blue-600 text-white text-boold" onClick={getWeather}>Get weather</button>
            {
                
            }
        </div>
    )                       
}

export default Api
