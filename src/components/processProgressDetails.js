import React from 'react'

const ProcessProgressDetails = props =>{
    return(
            <ul className="process__progressDetails">
                <li>Tasks in queue : <span className="progressItem">{props.noTasks}</span></li>
                <li>Tasks completed : <span className="progressItem">{props.tasksCompleted}</span></li>
                <li>Average task time : <span className="progressItem">{props.avgTaskTime}</span></li>
                <li>Time remaining : <span className="progressItem">{props.timeRemaining}</span></li>
            </ul>
    )
}

export default ProcessProgressDetails

