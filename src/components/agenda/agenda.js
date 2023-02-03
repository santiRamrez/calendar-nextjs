import React, { useState, useEffect, useRef } from "react";

import styles from './agenda.module.css' 

function Appointment({tStart, tEnd, subject, descrip}) {
    return (
        <div>
            <p>Time Start: {tStart}</p>
            <p>Time End: {tEnd}</p>
            <p>Subject: {subject}</p>
            <p>Description: {descrip}</p>
        </div>
    )
}

export default function Agenda({show, data, chosenDate, handleClickBack}) {
    const [start, setStart] = useState(false)

    const renderActivities = () => {
        try {
            let output = []
            //If there is no data
            if(!data.id) {
                 output.push(<p>...Nothing has been scheduled this month</p>)
                 return output
            }
            else {
                const checkAppointments = data[data.id].filter((rec) => Number(rec.date) == Number(chosenDate))
                if(checkAppointments.length > 0) {
                    //Sort the records
                    for(let rec of checkAppointments) {
                        output.push(<Appointment key={rec.id} tStart={rec.timeStart} tEnd={rec.timeEnd} subject={rec.subject} descript={rec.description} />)
                    }
                    return output
                    
                } else {
                     output.push(<p>...Nothing has been scheduled this date</p>)
                     return output
                }
            }
        } catch(err) {
            console.log(err)
        }
    } 

    useEffect(() => {
        if(chosenDate === "0" && !data) {
            return
        } else {
            setStart(true)
        }

      }, [chosenDate])

    return (
        <>
            <div className={show ? styles.backAgenda : styles.hideAgenda } onClick={handleClickBack}></div>
            <div className={show ? styles.agenda : styles.hideAgenda}>
                <form>
                    <input placeholder="Start 09.30"/>
                    <input placeholder="End 10.30"/>
                    <input placeholder="Subject"/>
                    <textarea placeholder="...Description here, is optional"></textarea>
                    <button>Send</button>
                </form>
                <div>
                  {start ? renderActivities().map((val) => val) : "There is an error :( "}
                </div>
            </div>
        </>
    )
}