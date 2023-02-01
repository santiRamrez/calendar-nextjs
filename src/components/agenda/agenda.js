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


export default function Agenda({show, data, selectedDate, handleClickBack}) {
    const [start, setStart] = useState()

    const renderActivities = () => {
        //If there is no data
        let output = []
        if (selectedDate === 0) return false
        if(data == false) return output.push(<p>...Nothing has been scheduled this month</p>)
        if(data) {
            const checkAppointments = data[data.id].filter((rec) => rec.date == Number(selectedDate))
            if(checkAppointments.length > 0) {
                //Sort the records
                for(let rec of checkAppointments) {
                    output.push(<Appointment key={rec.id} tStart={rec.timeStart} tEnd={rec.timeEnd} subject={rec.subject} descript={rec.description} />)
                }
                return output
                
            } else {
                return output.push(<p>...Nothing has been scheduled this date</p>)
            }
        }
    } 




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
                  
                </div>
            </div>
        </>
    )
}