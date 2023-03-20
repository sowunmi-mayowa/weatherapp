import {useEffect, useState} from 'react';

const Hero = () => {
    const [img, setImg] = useState(null)
    function getBg(){
        fetch('https://api.unsplash.com/photos/random/?client_id=GB-b7rfszFfYynFsFNIa7_vXYN35zaPIyeceyOF0OOY')
        .then(res => res.json())
        .then(data => setImg(data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getBg()
    })
    return (
        <div>
            {
                img && (
                    <img src={img.links.html} alt="img"/>
                )
            }
        </div>
    )
}

export default Hero
