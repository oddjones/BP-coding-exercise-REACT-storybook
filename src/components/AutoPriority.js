import React from 'react'
import SetPriority from './SetPriority'

const AutoPriority = props =>{
    const newsvgidx = props.svgidx+'autoprioritylist';
    return(
        
        <div className="autoList" style={{color:'#005285'}} >
            <p>Set Priority</p>
            <SetPriority {...props} setsAssign={'true'} svgidx={newsvgidx}/>
            <div className="processAutoAssign__priorities">
                <span>Low</span><span>Med</span><span>High</span>
            </div>
        </div>

    )
}
export default AutoPriority