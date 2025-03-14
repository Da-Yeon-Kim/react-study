import { useEffect, useState } from "react"

function Timer() {
    console.log('before timer');

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('ing...');
        }, 1000);

        // return () => {
        //     clearInterval(timer);
        //     console.log('after timer');
        // };
    });

    return <p>ing...</p>
}

export const Custom_effect = () => {
    const [startTime, setStartTime] = useState(false);

    return (
        <div>
            {startTime && <Timer /> ? ( startTime && <Timer />) : (<p>prepare the timer</p>)}
            <button onClick={() => setStartTime(!startTime)}>Timer</button>
        </div>
    );
}