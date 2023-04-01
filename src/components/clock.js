import {useClock} from 'react-use-clock';

const Clock = () => {
    function getDate(){
        let date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return `${day}-${month}-${year}`
    }
    const clock = useClock();
    return (
        <div>
            <strong className="text-6xl" id="text">
				{clock.hours.toString().padStart(2, '0')}:
				{clock.minutes.toString().padStart(2, '0')}:
				{clock.seconds.toString().padStart(2, '0')}
			</strong>
            <p className="text-center text-2xl font-thin"> { getDate()}</p>
        </div>
    )
}

export default Clock
