import React from 'react'

const SVGGear = props =>{
    const index=(props.svgidx ? props.svgidx : 0);
    return(
        <svg width={props.size} height={props.size}
        viewBox="0 0 32 32" 
        aria-labelledby={`settings-icon-${index}`}>
            <title id={`settings-icon-${index}`}>{props.alt}</title>
    <g fill='none' fillRule='evenodd'>
        <circle stroke={props.fillcolor} cx='16' cy='16' r='15.5' />
        <path d='M20.791 8.38l1.573-1.572a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1 0 1.414l-1.572 1.573c.533.845.929 1.786 1.157 2.791H27a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2.223a8.948 8.948 0 0 1-1.157 2.791l1.572 1.573a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.414 0l-1.573-1.572A8.948 8.948 0 0 1 18 24.777V27a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2.223a8.948 8.948 0 0 1-2.791-1.157l-1.573 1.572a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 0 1 0-1.414l1.572-1.573A8.948 8.948 0 0 1 7.223 18H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2.223a8.948 8.948 0 0 1 1.157-2.791L6.808 9.636a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 0l1.573 1.572A8.948 8.948 0 0 1 14 7.223V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2.223a8.948 8.948 0 0 1 2.791 1.157zM16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'
        fill={props.fillcolor} />
    </g>
            </svg>

    )

}
export default SVGGear