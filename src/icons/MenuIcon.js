import React from 'react'

const SVGMenu = props => {
    const index=(props.svgidx ? props.svgidx : 0);
    return(
    <svg viewBox='0 0 32 32' role="img" aria-labelledby={`menu-icon-${index}`} height={36} width={36} {...props}>
        <title id={`menu-icon-${index}`}>Menu</title>
        <g fill='none' fillRule='evenodd'>
            <path d='M22 20c0 .5-.4 1-1 1H11a1 1 0 0 1-1-1c0-.5.4-1 1-1h10c.5 0 1 .4 1 1zm0-4c0 .5-.4 1-1 1H11a1 1 0 0 1-1-1c0-.5.4-1 1-1h10c.5 0 1 .4 1 1zm0-4c0 .5-.4 1-1 1H11a1 1 0 0 1-1-1c0-.5.4-1 1-1h10c.5 0 1 .4 1 1z'
            fill='#0B75B7' />
            <circle stroke='#005285' cx='16' cy='16' r='15.5' />
        </g>
    </svg>

    )
}

export default SVGMenu;