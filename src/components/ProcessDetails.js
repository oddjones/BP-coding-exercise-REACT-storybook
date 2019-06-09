import React from 'react'

const ProgressDetails = props =>{
    return(
        <section className="process__Details">
            <ProcessNameDesc {...props} processName="Reticulate splines" processDescription="Whilst oscillating wildly"/>
            <ProcessProgressBar {...props}/>
            <ProcessProgressDetails {...props}/>
        </section>
    )
}

export default ProcessDetails
