import {useEffect, useState} from 'react';
import Header from './header';
import Api from './api';

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
     
    

    const backgroundStyle = {
        backgroundImage: `url(${img})`,
      };
    
      const positionStyle = {
        backgroundPosition: 'center',
      };

    return (
        <div style={{...backgroundStyle, ...positionStyle}} className="background flex justify-center items-center flex-col">
            <Header />
            <Api />
        </div>
    )
}

export default Hero
