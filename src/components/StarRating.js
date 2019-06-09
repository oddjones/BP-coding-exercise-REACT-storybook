import React from 'react'
import StarIcon from '../icons/StarIcon'

const StarRating = props =>{
    const changeAssign = () => props.setsAssign=='true' ? 'true' : 'false';
   return(
        <li className="c-hand" onClick={() => props.handler(props.index,changeAssign)}><StarIcon size='28' fillcolor={props.state ==='true' ? '#FFCE2B' : 'white'} {...props} /></li>
    )
}

export default StarRating