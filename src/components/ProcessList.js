import React from 'react'
import ProcessItem from './ProcessItem'


const fauxData = [{processName : 'Reticulate Splines' ,processStatus:"Assigned" ,processDescription:'Whilst oscillating wildly' ,progressValue:'20' ,priority:'2' ,noWorkers:'5',noTasks:'6',tasksCompleted:'18',avgTaskTime:'12s',timeRemaining:'01:12hr'},{processName : 'Accentuate the positive' ,processStatus:"Unassigned" ,processDescription:'Eliminate the negative' ,progressValue:'10' ,priority:'0' ,noWorkers:'0',noTasks:'7',tasksCompleted:'0',avgTaskTime:'n/a',timeRemaining:'n/a'},{processName : 'Aggregate real-time quality vectors' ,processStatus:"Unassigned" ,processDescription:'assertively evolve resource-sucking markets' ,progressValue:'0' ,priority:'0' ,noWorkers:'0',noTasks:'10',tasksCompleted:'0',avgTaskTime:'n/a',timeRemaining:'n/a'}, {processName : 'Exit, stage left' ,processStatus:"Stopped" ,processDescription:'Followed by a bear' ,progressValue:'40' ,priority:'0' ,noWorkers:'8',noTasks:'10',tasksCompleted:'4',avgTaskTime:'n/a',timeRemaining:'n/a'}]

let items =[];
for(let n=0;n<fauxData.length;n++){
    let processIdx='process'+n;
    items.push(<ProcessItem {...fauxData[n]} svgidx = {processIdx} key={'process'+n}/>)
}

const ProcessList = props => {

    return(
        <section className="columns content">
            <ul className="column col-8 col-md-12 col-mx-auto processList">
                {items}
            </ul>
        </section>
    )
}
export default ProcessList