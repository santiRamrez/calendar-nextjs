import React, { useState, useEffect, useRef } from "react";


import styles from './calendar.module.css' 


/** Utils **/
import generateRenderDates from '@/utils/generateRenderDates';
import monthToNumber from '@/utils/monthToNumber';


/** Date Component **/
function Dates({num, cl=styles.date, handleClick, classSpan=styles.hideSpan}) {

    return (
        <div className={cl}>
            <button onClick={handleClick} value={num}>{num}</button>
            <span className={classSpan}></span>
        </div>
    )
}

export default function CalendarUI({month, year, data, endpoint, sendDate = (f) => f, showAgenda = (f) => f}) {
    const dt = new Date()
    
    // State of this component
    const [date, setDate] = useState({
        "month": month,
        "year": year
    })


    useEffect(() => {
        sendDate(date)
    }, [date])

    const renderDates = () => {
        if(data) {
            const numberMonth = monthToNumber(date.month)
            const [padding, totalRender] = generateRenderDates(numberMonth, date.year)
            let output = []
            for (let j = 1; j <= padding + totalRender; j++) {
                    let cont = j - padding
                    if (cont <= 0) {
                        output.push(<Dates num={cont} key={j} cl={styles.hideDate}/>)
                    } else {
                        
                        if(data.hasOwnProperty(endpoint)) {
                            //Find how many dates or appointments are in this date
                            let checkDate = data[endpoint].filter((rec) => rec.date === cont)
                            if (checkDate.length > 0) {
                                output.push(<Dates num={cont} key={j} handleClick={onClickDate} classSpan={styles.showSpan}/>)
                            } else {
                                output.push(<Dates num={cont} key={j} handleClick={onClickDate} classSpan={styles.hideSpan}/>)
                            }
                        } else {
                            output.push(<Dates num={cont} key={j} handleClick={onClickDate}/>)
                        }
                        
                    }
            }
                return output
        } else {
            return false
        }
       
    }

    // Methods
    const handleSelect = (e) => {
        document.getElementById("months").value = e.target.value
        setDate((prev) => {
            return {
                ...prev,
                "month": e.target.value
            }
        })
    };

    const onClickDate = (e) => {
        //If the user has done click on a date
        if (e.target.value > 0) {
                setDate((prev) => {
                    return {
                        ...prev,
                        "date": e.target.value
                    }
                })
                showAgenda(true)
        }
    }
    
    const handleInput = (e) => {
        setDate((prev) => {
            return {
                ...prev,
                "year": e.target.value ? e.target.value : date.year
            }
        })
    }

    return (
        <div className={styles.containerUI}>
            <div className={styles.calHeader}>
                <h2>{`${date.month}  -  ${date.year}`}</h2>
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
		        <input type="text" id="year" onBlur={handleInput} placeholder="Type a year"/> 
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
                {data ? renderDates().map((val) => val) : "No data" }
            </div>
        </div>
    )
}