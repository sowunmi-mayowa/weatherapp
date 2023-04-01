import { WiThermometer, WiHumidity } from "react-icons/wi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdSpeed } from "react-icons/md";

import Clock from './clock';
const Views = (props) => {
    const results = props.results;
    return (
        <div>
        {
            results && (
               <div className="flex flex-col justify-center items-center bg-white rounded-xl shadow-xl p-8">
               <div className="text-black">
                <Clock />
                </div>
                <div className="flex items-center justify-center flex-col md:flex-row">
                    <div>
                        <img src={ `https://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`} alt="nature images from unsplash" className="w-32"/>
                        <p className="text-md text-center capitalize font-bold">{ results.weather[0].description }</p>
                    </div>
                    <div>
                    <div className="flex items-center  font-light text-gray-400 mb-4 text-sm">
                        < HiOutlineLocationMarker />
                        <p>{ results.name }, { results.sys.country }. </p>
                    </div>
                    <div className="flex items-center justify-center flex-col md:flex-row py-4 px-8">
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center">
                                <WiThermometer className="w-8 h-8"/>
                                <p className="text-4xl font-bold">{ Math.round(results.main.temp ) - 273 }<sup>o</sup>C</p>
                            </div>
                            <p className="text-xs text-gray-400 text-center">Temperature</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center my-4 md:my-0 md:mx-4">
                                <WiHumidity className="w-8 h-8"/>
                                <p className="text-4xl font-bold">{ results.main.humidity }%</p>
                            </div>
                            <p className="text-xs text-gray-400 text-center">Humidity</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center">
                                <MdSpeed className="w-8 h-8"/>
                                <p className="text-4xl font-bold">{ results.wind.speed }</p>
                            </div>
                            <p className="text-xs text-gray-400 text-center">Wind Speed (m/s)</p>
                        </div>
                    </div>
                        
                        
                    </div>
                </div>
               </div>
            )
        }
    </div>
    )
}
export default Views
