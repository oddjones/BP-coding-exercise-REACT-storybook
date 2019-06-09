import React from 'react'

const AssignmentList = props =>{
    return(<ul><li onClick={() => props.handler()}>Auto-assign</li>
<li>Select Workers</li>
<li>Schedule</li>
<li>Archive</li></ul>)
}
export default AssignmentList


