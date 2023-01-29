import React, { useState, useEffect, useRef } from "react";

import styles from './agenda.module.css' 


export default function Agenda({show, d, handleClickBack}) {
    const [schedule, setSchedule] = useState(d)

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
            </div>
        </>
    )
}