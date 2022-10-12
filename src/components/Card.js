import React, { useEffect, useState } from 'react'
import styles from './Card.module.css'
import Background from './Background'
import dice from '../images/icon-dice.svg'
import pattern from '../images/pattern-divider-mobile.svg'


const Card = () => {
    let randomNumber = Math.round(Math.random() * 201)
    const [number, setNumber] = useState(117)
    const [advice, setAdvice] = useState({
        id: number,
        advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action"
    })

    function clickHandler() {
        setNumber(randomNumber)
        console.log(randomNumber)

    }
    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://api.adviceslip.com/advice/${number}`)
            const data = await res.json()
            console.log(data)
            setAdvice(data.slip)
        }
        getData()
    }, [number])

    return (
        <Background>
            <div className={styles.card}>
                <h1>ADVICE # {advice.id}</h1>
                <p>"{advice.advice}"</p>
                <img src={pattern} alt='icon' />
                <button onClick={clickHandler} type='submit'>
                    <img src={dice} alt='icon' />
                </button>
            </div>
            <div className={styles.attribution}>Built By 
            <a href="https://github.com/Nathaniyell" target='_blank' rel="noreferrer">Nathan</a>
            </div>
        </Background>
    )
}

export default Card