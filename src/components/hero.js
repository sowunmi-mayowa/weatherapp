import {useEffect, useState} from 'react';
import heroBg from '../img/pexels-sebastian-arie-voortman-165505.jpg';
import Header from './header';
import { useClock } from 'react-use-clock'

const Hero = (props) => {
    const id = "GB-b7rfszFfYynFsFNIa7_vXYN35zaPIyeceyOF0OOY";
    const [img, setImg] = useState(null)
    
    function getBg(){
        fetch(`https://api.unsplash.com/photos/random?page=1&query=nature&client_id=${id}&per_page=1`)
        .then(res => res.json())
        .then(data => {
            setImg(data.urls.full)
            console.log(data.urls.full);
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getBg();
    },[])
     
    function getDate(){
        let date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return `${day}-${month}-${year}`
    }

    const backgroundStyle = {
        backgroundImage: `url(${img})`,
      };
    
      const positionStyle = {
        backgroundPosition: 'center',
      };

     const clock = useClock();
    return (
        <div style={{...backgroundStyle, ...positionStyle}} className="background flex justify-center items-center flex-col">
            <Header />
			<strong className="text-6xl text-white">
				{clock.hours.toString().padStart(2, '0')}:
				{clock.minutes.toString().padStart(2, '0')}:
				{clock.seconds.toString().padStart(2, '0')}
			</strong>
            <div className="text-white">
                <p className="text-center text-2xl font-thin"> { getDate()}</p>
            </div>
            {/* <img src={img.urls.full} alt="" style={{backgroundPosition: "center", backgroundSize: "cover"}}/> */}
        </div>
    )
}

export default Hero
