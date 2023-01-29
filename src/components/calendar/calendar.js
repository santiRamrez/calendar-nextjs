import React, { useState, useEffect, useRef } from "react";


import styles from './calendar.module.css' 


/** Utils **/
import getCurrentDate from '@/utils/getCurrentDate'
import generateRenderDates from '@/utils/generateRenderDates';
import monthToNumber from '@/utils/monthToNumber';


/** Date Component **/
function Dates({num, cl=styles.date, handleClick}) {

    return (
        <div className={cl}>
            <button onClick={handleClick} value={num}>{num}</button>
        </div>
    )
}

export default function CalendarUI({sendDate = (f) => f}) {
    const dt = new Date()
    
    // State of this component
    const [month, setMonth] = useState(dt.toLocaleString('en-uk', {month:'long'}))
    const [year, setYear] = useState(dt.getFullYear())
    const [numMonth, setNumMonth] = useState(monthToNumber(month))
    const [chosenDate, setChosenDate] = useState(0)

    const renderDates = () => {
       const [padding, totalRender] = generateRenderDates(numMonth, year)
       let output = []
       for (let j = 1; j <= padding + totalRender; j++) {
            let cont = j - padding
            if (cont <= 0) {
                output.push(<Dates num={cont} key={j} cl={styles.hideDate}/>)
            } else {
                output.push(<Dates num={cont} key={j} handleClick={onClickDate}/>)
            }
	    }
        return output
    }

    
    useEffect(() => {
        setNumMonth(monthToNumber(month))
    }, [month])

    
    // Methods
    const handleSelect = (e) => {
        setMonth(e.target.value)
        document.getElementById("months").value = e.target.value
        sendDate({"month": e.target.value})

    };

    const onClickDate = (e) => {
        setChosenDate(e.target.value)
        //If the user has done click on a date
        if (e.target.value) {
                const d = {
                    "date": e.target.value,
                    "numM": numMonth,
                    "month": month,
                    "year": year
                }
                sendDate(d)
        }
    }

    const handleInput = (e) => {
        setYear(e.target.value)
    }

    return (
        <div className={styles.containerUI}>
            <div className={styles.calHeader}>
                <h2>{`${month}  -  ${year}`}</h2>
                <div className={styles.customSelect}>
                    <select onChange={handleSelect} id="months"> 
                        <option>Select a month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                    <span className={styles.arrow}></span>
                </div>
		        <input type="text" id="year" onChange={handleInput} placeholder="Type a year"/> 
            </div>
            <div className={styles.listDays}>
                    <p>Sun</p>
                    <p>Mon</p>
                    <p>Tue</p>
                    <p>Wed</p>
                    <p>Thu</p>
                    <p>Fri</p>
                    <p>Sat</p>
            </div>
            <div id="renderDatesHere" className={styles.contDates}>
                {renderDates().map((val) => val)}
            </div>
        </div>
    )
}