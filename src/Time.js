import React, { useEffect, useState } from 'react'

const Time = () => {
    const [count, setCount] = useState(0);
    const date = new Date();

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 500);
    });
    return (
        <content>
            <h4>Time</h4>
            <div className='display'>
                <h5>Date :{date.toLocaleDateString()}</h5>
                <h5>Time: {date.toLocaleTimeString()}</h5>
                {date.getFullYear()} <br />
                {date.getDay()}<br />
                {date.getDate()}<br />
                {date.getHours()}<br />
                {date.getMonth()}<br />
                {date.toDateString()}<br />
                {date.toLocaleTimeString()}<br />
                {date.toTimeString()}<br />


                <h5>I have rendered {count} times!</h5>
            </div>
        </content>
    )
}

export default Time