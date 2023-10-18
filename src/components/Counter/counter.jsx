import { useState } from "react"
import styles from './counter.module.css'


const Counter = () => {

    const [counter, setCounter] = useState(1)

    const add = () => {
        setCounter(counter + 1)
    }

    const sub = () => {
        counter > 1 && setCounter(counter - 1)
    }

    return (
        <div className={styles.counterContainer}>
            <button onClick={sub} className={styles.counterButtons}>-</button>
            <p className={styles.counterNumber}>{counter}</p>
            <button onClick={add} className={styles.counterButtons}>+</button>
        </div>
    )
}

export default Counter