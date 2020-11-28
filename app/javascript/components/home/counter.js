import React, { useEffect, useState } from 'react';
import moment from 'moment';

function Counter() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const timeLeft = () => {
        const deadline = moment("2021-04-01")

        const timeDifference = moment(deadline - moment())
        const seconds = Math.floor(timeDifference / 1000 % 60)
        const minutes = Math.floor(timeDifference / 1000 / 60 % 60)
        const hours = Math.floor(timeDifference / (1000 * 60 * 60) % 24)
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    };


    useEffect(() => {
        const timer = setInterval(() => {
            timeLeft();
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    });
    return (
        // render here
        <>
            
            <ul className="h-100 text-center text-white pt-10 uppercase">
                <li className="inline-block text-6xl p-2 px-4 border-r-2">{days} <br /><span className="block text-2xl">days</span></li>
                <li className="inline-block text-6xl p-2 px-4 border-r-2">{hours} <br /><span className="block text-2xl"> Hours</span></li>
                <li className="inline-block text-6xl p-2 px-4 border-r-2">{minutes} <br /><span className="block text-2xl"> Minutes</span> </li>
                <li className="inline-block text-6xl p-2 pl-4">{seconds} <br /><span className="block text-2xl"> Second</span> </li>
            </ul>
        </>
    )
}

export default Counter;