import React,{ useState} from 'react'
import ProcessNameDesc from './ProcessNameDesc'
import ProcessProgress from './ProcessProgress'
import StatusSection from './StatusSection'

const ProcessItem = props =>{

    const[pcComplete,setPcComplete]=useState(props.progressValue)

    //processStatus
    const [processStatus,setProcessStatus]=useState(props.processStatus)

    const toggleAssignedByNoWorkers = (flag) => {
        if(flag){
            setProcessStatus('Assigned')
        }
        else{
            setProcessStatus('Unassigned')
        } 
    }


    //progress
    const [progressValue,setProgressValue]=useState(Number(props.progressValue))
    const incrementProgressValue = () =>{
        setProgressValue(progressValue+1);
    }

    const completeTask = () =>{
        setProcessStatus('Complete')
        setPlaying(false);

    }

    //fake progress
    const fakeProgress = () =>{
        for(let n=pcComplete;n<100;n++){
            setPcComplete(n);
        }
        setTimeout(() => (completeTask()),5000)
        
    }

    //is the process running or not?
    const [playing,setPlaying] = useState(false);
    const toggleProcess = () => {

        //you can't start a process which hasn't been assigned any workers
        if(!playing){
            if(processStatus != 'Unassigned' && processStatus !='Complete'){
                setPlaying(!playing);
                setProcessStatus('Working');
                fakeProgress()
            }
        }else{
            setPlaying(!playing);
            setProcessStatus('Assigned');
        }
    }

    return(
        
        <li className="process">
            <section className="process__Details">
                <ProcessNameDesc {...props}/>
                <ProcessProgress {...props} pcComplete={pcComplete}/>
            </section>
            <StatusSection {...props} 
                            isrunning={playing} 
                            processHandler={toggleProcess} 
                            processStatus={processStatus} 
                            setAssigned={toggleAssignedByNoWorkers}
                            pcComplete={pcComplete}/>
        </li>
    )
}
export default ProcessItem