import React from 'react'
import StarRating from './StarRating'

const SetPriority = props =>{
    
    return(
    <div className="processStatus__priority">
        <ol className="processPriority">
            <StarRating {...props} state={props.priority >=1 ? 'true' : 'false'} index='1' alt={props.priority == 0 ? 'no priority' : 'low priority'} svgidx={props.svgidx+'ratinglow'}/>
            <StarRating {...props} state={props.priority >=2 ? 'true' : 'false'} index='2' alt="medium priority" svgidx={props.svgidx+'ratingmed'}/>
            <StarRating {...props} state={props.priority >=3 ? 'true' : 'false'} index='3' alt="high priority" svgidx={props.svgidx+'ratinghigh'}/>
        </ol>
    </div>
    )
}
export default SetPriority
