import React,{ useState } from 'react'

const AssignWorkers = props =>{

    return(
        <>
        <p className="processStatus__label">Workers Assigned</p>
        <div className="processStatus__workersControls">
            <button className="btn btn-sm s-circle" onClick={()=> props.decrement()}>-</button>
            <span className="assignedWorkers">{props.noWorkers}</span>/<span className="totalWorkers">25</span>
            <button className="btn btn-sm s-circle" onClick={()=> props.increment()}>+</button>
        </div>
        </>
    )
}

export default AssignWorkers