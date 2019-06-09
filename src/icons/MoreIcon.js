import React from 'react'

const SVGEllipsis = props =>{
    const index=(props.svgidx ? props.svgidx : 0);
    return(
            <svg viewBox='0 0 32 32'
                role="img"
                width="36" height="36"
                aria-labelledby={`more-icon-${index}`}>
                    <title id={`more-icon-${index}`}>{props.alt}</title>
                    <g fill='none' fillRule='evenodd'>
                        <path d='M11 17.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'
                        fill='#0B75B7' />
                        <circle stroke='#005285' className='btnRing' cx='16' cy='16' r='15.5'
                        />
                    </g>
                </svg>  
    )
 
}
export default SVGEllipsis;
  
