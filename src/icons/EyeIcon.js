import React from 'react'

const SVGEye = props => {
    const index=(props.svgidx ? props.svgidx : 0);
    return(
    <svg xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 32 32' height = {props.size} width={props.size} aria-labelledby={`eye-icon-${index}`}>
        <title id={`eye-icon-${index}`}>{props.alt}</title>
        <defs>
        <path d='M16 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-9c4.114 0 7.13 2.262 8.925 6.62l.156.38-.156.38C23.13 20.739 20.115 23 16 23c-4.114 0-7.13-2.262-8.925-6.62L6.92 16l.156-.38C8.87 11.261 11.886 9 16 9zm0 2c-3.142 0-5.41 1.617-6.912 5 1.503 3.384 3.77 5 6.912 5 3.143 0 5.41-1.616 6.912-5-1.503-3.383-3.77-5-6.912-5z'
        id= {`a-${index}`} fill={props.fillcolor}/>
    </defs>
    <g fill='none' fillRule='evenodd'>
        <circle stroke='#005285' cx='16' cy='16' r='15.5' />
        <use fill={props.fillcolor} xlinkHref={`#a-${index}`} />
    </g>
</svg>
    )
}

export default SVGEye;