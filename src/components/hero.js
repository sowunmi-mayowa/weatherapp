import {useEffect, useState} from 'react';
import heroBg from '../img/pexels-sebastian-arie-voortman-165505.jpg';
import Header from './header';
import { useClock } from 'react-use-clock'

const Hero = (props) => {
    console.log(props)
    const [img, setImg] = useState(null);
    function getBg(){
        fetch('https://api.unsplash.com/photos/random/?client_id=GB-b7rfszFfYynFsFNIa7_vXYN35zaPIyeceyOF0OOY')
        .then(res => res.json())
        .then(data => setImg(data))
        .catch(err => console.log(err))
    }

    // useEffect(() => {
    //     getBg()
    // })
    function getDate(){
        let date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return `${day}-${month}-${year}`
    }
     const clock = useClock()
    return (
        <div style={{background: `url(${heroBg})`, backgroundPosition: "center", backgroundSize: "cover", height: "80vh"}} className="flex justify-center items-center flex-col">
            <Header />
			<strong className="text-6xl text-white">
				{clock.hours.toString().padStart(2, '0')}:
				{clock.minutes.toString().padStart(2, '0')}:
				{clock.seconds.toString().padStart(2, '0')}
			</strong>
            <div className="text-white">
                <p className="text-center text-2xl font-thin"> { getDate()}</p>
            </div>
        </div>
    )
}

export default Hero
