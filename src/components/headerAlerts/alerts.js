import React from 'react'


export default function Alerts({msg, classN}) {
    
    return (
        <div className={classN}>
            <p>{msg}</p>
        </div>
    )
}