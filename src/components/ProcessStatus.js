import React ,{ useState } from 'react'
import GearIcon from '../icons/GearIcon'
import AssignmentList from './AssignmentList'
import AutoPriority from './AutoPriority'

const ProcessStatus = props =>{

    return(
        <div className={`processStatus__status ${props.processStatus}`}>
            <div className="popover popover-bottom">
                <button 
                    className="btn btn-md m-circle" 
                    type="button" 
                    aria-label="assign workers to process"
                    aria-haspopup="true"
                >
                <GearIcon 
                    {...props}
                    size='16' 
                    fillcolor="#ffffff" 
                    alt="settings" 
                />        
                </button>
                <div className="assignmentListPopover c-hand popover-container ">

                {/* Show set priority */}
                {props.listView && <AutoPriority 
                                        {...props} 
                                        handler={props.priorityHandler} 
                                        />}

                {/* Show assignment list */}
                {!props.listView && <AssignmentList 
                                        handler={props.listHandler} 
                                    />}

                </div>&nbsp;<span>{props.processStatus}</span>
            </div>
        </div>
    )
}
export default ProcessStatus;





