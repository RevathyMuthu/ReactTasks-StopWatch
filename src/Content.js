import React, { useState, useEffect } from 'react'

const Content = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isRunning]);



    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        console.log(minutes);
        const remainingSeconds = seconds % 60;
        console.log(remainingSeconds);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <content>

            <div className='display'>
                <div className='clock'>
                    <div className="time">{formatTime(time)}</div>
                </div>

                <div>
                    {isRunning ? (
                        <button onClick={handlePause}>Pause</button>
                    ) : (
                        <button onClick={handleStartStop}>Start</button>
                    )}
                    <button onClick={handleStartStop}>Stop</button>
                    <button onClick={handleReset}>Reset</button>

                </div>


            </div>

        </content>
    )
}

export default Content