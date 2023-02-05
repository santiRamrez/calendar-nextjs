import React, { useState, useEffect, useRef } from "react";

import styles from './agenda.module.css' 

import HttpsReq from "@/utils/HttpsReq";

function Message({text}) {
    return (
        <div className={styles.altMsg}>
            <p>{text}</p>
        </div>
    )
}

function Appointment({tStart, tEnd, subject, descrip, handleDelete}) {
    return (
        <div className={styles.appoint}>
            <p><b>Start at: </b> {tStart}</p>
            <p><b>End at: </b> {tEnd}</p>
            <p><b>Subject: </b> {subject}</p>
            <p><b>Description: </b> {descrip}</p>
            <button type="button" onClick={handleDelete}>X</button>
        </div>
    )
}

export default function Agenda({show, data, month, year, chosenDate, totalRecords, handleClickBack}) {
    const HTTP = new HttpsReq()

    const [start, setStart] = useState(false)
    const [postAppoint, setPostAppoint] = useState({
        "id": "",
        "userId" : 1,
        "timeStart": "",
        "timeEnd": "",
        "subject": "",
        "description": ""
    })

    const renderActivities = () => {
        try {
            let output = []
            //If there is no data
            if(data.length === 0) {
                 output.push(<Message text={"... Nothing has been scheduled this month"} key={1}/>)
                 return output
            }
            else {
                const checkAppointments = data.filter((rec) => {
                    const getDate = rec.date.split("/")[1]
                    const getYear = rec.date.split("/")[2]
                    const check = Number(getDate) === Number(chosenDate) && getYear === year.toString() ? true : false
                    return check
                })
                if(checkAppointments.length > 0) {
                    //Sort the records
                    for(let rec of checkAppointments) {
                        output.push(<Appointment key={rec.id} tStart={rec.timeStart} tEnd={rec.timeEnd} subject={rec.subject} descrip={rec.description} />)
                    }
                    return output
                    
                } else {
                     output.push(<Message text={"... Nothing has been scheduled this date"} key={1}/>)
                     return output
                }
            }
        } catch(err) {
            console.log(err)
        }
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        const json = JSON.stringify(postAppoint)
        const URI = "dates/" 
        HTTP.postRecord(json, URI)   
        setPostAppoint({
            "id": "",
            "userId" : 1,
            "timeStart": "",
            "timeEnd": "",
            "subject": "",
            "description": ""
        })

    }

    const handleInput = (e) => {
        setPostAppoint((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
                "id": totalRecords + 1
            }
        })
    }

    useEffect(() => {
        if(chosenDate === "0" && !data) {
            return
        } else {
            if(chosenDate) {
                const date = chosenDate.length === 2 ? chosenDate : `0${chosenDate}`
                setStart(true)
                setPostAppoint((prev) => {
                    return {
                        ...prev,
                        "date": `${month}/${date}/${year}`
                    }
                })
            }
        }

    }, [chosenDate])

    return (
        <>
            <div className={show ? styles.backAgenda : styles.hideAgenda } onClick={handleClickBack}></div>
            <div className={show ? styles.agenda : styles.hideAgenda}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formTime}>
                        <label>
                            Start Time:
                            <input placeholder="09.30" name="timeStart" value={postAppoint.timeStart} onChange={handleInput}/>
                        </label>
                        <label>
                            End Time:
                            <input placeholder="10.30" name="timeEnd" value={postAppoint.timeEnd} onChange={handleInput}/>
                        </label>
                    </div>
                    <div className={styles.formText}>
                        <label>
                            Subject:   
                            <input placeholder="Meeting with x client" name="subject" value={postAppoint.subject} onChange={handleInput}/>
                        </label>
                        <label className={styles.descrip}>
                            Description:
                        </label>
                            <textarea placeholder="...Description here, is optional" name="description" value={postAppoint.description} onChange={handleInput}></textarea>
                        <button type="Submit">Send</button>
                    </div>
                </form>
                <div className={styles.recContainer}>
                  {start ? renderActivities().map((val) => val) : "There is an error :( "}
                </div>
            </div>
        </>
    )
}