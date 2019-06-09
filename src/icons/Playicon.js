import React from 'react'

const SVGPlay = props =>{
    const index=(props.svgidx ? props.svgidx : 0);
    return(
    <svg viewBox="0 0 32 32" 
role="img" 
width={props.size}
height={props.size}
aria-labelledby={`play-icon-${index}`}>
    <title id={`play-icon-${index}`}>{props.alt}</title>
    <g fill="none" fillRule="evenodd">
        <path d="M22.32 15.18L13.57 9.092a1 1 0 0 0-1.571.82v12.173a1 1 0 0 0 1.571.821l8.749-6.086a1 1 0 0 0 0-1.642z" fill={props.fillcolor}/>
        <circle stroke={props.fillcolor} cx="16" cy="16" r="15.5"/>
        </g>
        </svg>
)
}



export default SVGPlay;


