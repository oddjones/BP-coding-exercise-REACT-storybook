import React from 'react'

const ProcessNameDesc = props => {
    return(
        <>
            <div className="form-group">
                <label className="form-label" htmlFor={`input-example-${props.svgidx}`}>Name</label>
                <input className="form-input" type="text" name={`input-example-${props.svgidx}`} id={`input-example-${props.svgidx}`} placeholder="Name" value={props.processName}/>
            </div>
            <p className="process__Description">{props.processDescription}</p>
        </>
    )
}

export default ProcessNameDesc