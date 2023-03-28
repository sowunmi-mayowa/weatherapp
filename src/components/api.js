import { useState, useEffect } from 'react';
import '../output.css'

const Api = () => {
    const [results, setResults] = useState(null)
    const [long, setLong] = useState(3.4308096)
    const [lat, setLat] = useState(6.4520192)

    useEffect(() => {
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
    
            console.log('latitude: ' ,lat);
            console.log('longitude: ' ,long);
        }
        const url = "https://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + long + "&appid=8369418bc7da331b03b144d779c0ec81";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //setResults(JSON.stringify(data.weather))
            setResults(data)
        })
        .catch(err => console.log(err))
              
        getLocation();
    }, [long, lat])

    
    return (
        <div>
            <button className="bg-blue-600 text-white text-boold" >Get weather</button>
            <p>lat: {lat} long: {long} </p>
            {
                results && (
                   <div>
                   <img src={ `https://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`} alt=""/>
                        <p>{ results.weather[0].description }</p>
                        <p>The weather reaults at { results.name }, { results.sys.country } </p>
                   </div>
                )
            }
        </div>
    )                       
}

export default Api
