import React from 'react'

const SVGPause = props =>{
    const index=(props.svgidx ? props.svgidx : 0);
    return(
        <svg width={props.size} height={props.size} viewBox='0 0 32 32' aria-labelledby={`pausebutton-icon-${index}`}><title id={`pausebutton-icon-${index}`}>Process running - click to pause</title><g fill="none" fillRule="evenodd"><circle stroke="#434A4F" fill="#0D6020" cx="16" cy="16" r="15.5"/><path d="M10 9h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm9 0h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z" fill="#E4F0FB"/></g></svg>
    )
}
export default SVGPause
