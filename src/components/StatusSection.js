import React, { useState } from 'react'
import AssignWorkers from './AssignWorkers'
import SetPriority from './SetPriority'
import ProcessSatus from './ProcessStatus'
import { PlayIcon } from '../icons/AllIcons';
import { PauseIcon } from '../icons/AllIcons';

const StatusSection = props =>{

    //how many workers are assigned?
    const noWorkers=props.noWorkers ? Number(props.noWorkers) : 0;
    const [count, setCount] = useState(noWorkers);
 
    // increment / decrement workers
    const incrementHandler = () =>{
        setCount(count < 25 ? count+1 : count);
        if(count === 0){
            props.setAssigned(true);
        }
    }
    const decrementHandler = () => {
        setCount(count > 0 ? count-1 : count)
        if(count === 1){
            props.setAssigned(false)
        }
    }

    //show the option list or set priority rating in the "settings" dropdown
    const [showAutoAssignPriorityView,setShowAutoAssignPriorityView] = useState(false);
    const toggleListView = () => setShowAutoAssignPriorityView(!showAutoAssignPriorityView);

    //Process priority (stars)
    const[thispriority,setThisPriority]=useState(Number(props.priority));
    const setThePriority = (index) =>{
        if (thispriority === 1 && index === 1){
            setThisPriority(0)
        }
        else{
            setThisPriority(index)
        }
    }

    //autoAssign (sets priority AND workers)
    const autoAssign = (index) =>{
        setThisPriority(index);
        setCount(index*8);
        props.setAssigned(true);
        setTimeout(() =>{toggleListView()},4000);
    }

    if(props)
    return(
        <>

        <section className="processStatus">
            <AssignWorkers {...props} increment={incrementHandler} decrement = {decrementHandler} noWorkers={count} />
            <SetPriority {...props} handler={setThePriority} priority = {thispriority}/>
            <ProcessSatus {...props} listHandler={toggleListView} priorityHandler={autoAssign} priority = {thispriority} listView={showAutoAssignPriorityView}/>
        </section>
        <button className={`btn s-circle process__Action `} onClick={() => props.processHandler()}>
            {!props.isrunning && <PlayIcon {...props} size="36" fillcolor={count > 0 && props.processStatus != 'Complete' ? '#434a4f': '#D4D4D4'} alt={count > 0 ? 'Start the process': 'Assign workers in order to start the process'}/>}
            {props.isrunning && <PauseIcon {...props} size="36" />}
        </button>
        </>
    )
}
export default StatusSection