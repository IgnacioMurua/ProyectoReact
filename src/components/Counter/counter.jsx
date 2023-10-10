import { useState } from "react"
import './counter.css'


const Counter = () => {

    const [counter, setCounter] = useState(1)

    const add = () => {
        setCounter(counter + 1)
    }

    const sub = () => {
        counter > 1 && setCounter(counter - 1)
    }

    return (
        <div className="counterContainer">
            <button onClick={sub} className="counterButtons">-</button>
            <p className="counterNumber">{counter}</p>
            <button onClick={add} className="counterButtons">+</button>
        </div>
    )
}

export default Counter