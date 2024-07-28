import { useState, useEffect } from "react";


const Test = () => { 
    const [countdown, setCountdown] = useState(180)
   
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prevState => prevState - 1)
            console.log('Countdow...')
        }, 1000)
        return () => clearInterval(timerId)
    }, [])
    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Test;