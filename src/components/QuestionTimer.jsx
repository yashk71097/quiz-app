import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
export default function QuestionTimer({ timer, onTimerOut }) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        setTimeout(onTimerOut, timer);
    }, [onTimerOut, timer]);

    useEffect(() => {
        setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
        }, 10);
    }, []);

    return <progress id="question-time" max={timer} value={remainingTime} />;
}
