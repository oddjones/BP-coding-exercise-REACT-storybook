import React, { useState } from 'react'
import { EyeIcon } from '../icons/AllIcons';
import ProcessProgressDetails from './processProgressDetails';

const ProcessProgress = props =>{

    const[visible,setVisible]=useState(false);
    const toggleVisibility = () =>{
        setVisible(!visible);
    }

    return(
        <>
        <section className="process__progress">
        <button className="btn s-circle showProgressDetail" onClick={() => toggleVisibility()}>
            <EyeIcon {...props} size="36" fillcolor={Number(props.pcComplete) >0 ? '#0B75B7' : '#D4D4D4'}/>
        </button>
        
        <div className="process__progressBar">
            <label htmlFor="processProgress">Progress: </label>
            <progress name="processProgress" max="100" value={props.pcComplete}>{props.pcComplete}%</progress>
        </div>
    </section>
        {visible && <ProcessProgressDetails {...props}/>}
      </>
    )
}

export default ProcessProgress