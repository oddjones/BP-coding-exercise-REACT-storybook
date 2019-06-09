import React from 'react'

const SVGStar = props =>{
    const index=(props.svgidx ? props.svgidx : 0);
    return(
        <svg 
        width="32" 
        height="32" 
        role="img"
        aria-labelledby={`icon-star-${index}`}
        >
            <title id={`icon-star-${index}`}>{props.alt}</title>
            <defs>
             
                <path id={`c-${index}`} d="M0 0h32v32H0z"/>
            </defs>
            <g transform="translate(1.6 1.6)" fill="none" fillRule="evenodd">
                <mask id={`b-${index}`} fill="#fff">
                <path d="M13.656 25.724l-6.278 2.91c-.926.43-2.01-.006-2.42-.973a1.992 1.992 0 0 1-.148-.975l.71-7.137a1.971 1.971 0 0 0-.46-1.478L.47 12.733a1.976 1.976 0 0 1 .138-2.705c.239-.224.53-.379.843-.449l6.716-1.5a1.841 1.841 0 0 0 1.204-.913l3.442-6.21c.507-.915 1.63-1.228 2.506-.698.277.168.507.409.668.698l3.441 6.21c.26.468.697.8 1.204.913l6.717 1.5c.99.222 1.622 1.24 1.41 2.274-.067.328-.215.631-.429.88l-4.59 5.338c-.346.403-.513.94-.46 1.478l.71 7.137c.105 1.052-.627 1.994-1.635 2.103a1.764 1.764 0 0 1-.933-.154l-6.278-2.91a1.763 1.763 0 0 0-1.488 0z" id={`a-${index}`}/>
                </mask>
                <path stroke="#5D5D5D" fill={props.fillcolor} d="M13.866 26.178l-6.278 2.91c-1.185.55-2.57-.008-3.09-1.232a2.492 2.492 0 0 1-.186-1.22l.71-7.136a1.472 1.472 0 0 0-.342-1.103L.09 13.059c-.85-.99-.773-2.505.176-3.396a2.307 2.307 0 0 1 1.076-.572l6.716-1.5c.366-.081.685-.323.876-.668l3.441-6.21c.644-1.16 2.081-1.56 3.202-.883.353.213.645.518.847.884l3.442 6.21c.19.344.51.586.875.667l6.717 1.5c1.261.282 2.057 1.565 1.79 2.863-.083.41-.269.791-.539 1.105l-4.59 5.338c-.257.298-.381.7-.341 1.103l.71 7.136c.131 1.321-.794 2.51-2.079 2.65a2.264 2.264 0 0 1-1.197-.198l-6.279-2.91a1.263 1.263 0 0 0-1.067 0z"/>
                <g mask={`url(#b-${index})`}>
                    <g transform="translate(-1.6 -1.6)">
                        <g stroke="#979797" strokeWidth=".5" mask={`url(#d-${index})`} >
                            <path d="M16.398 58.172l-43.874-43.309M18.24 56.294l-43.873-43.308M19.933 54.57l-43.874-43.308M21.625 52.846L-22.25 9.538M23.316 51.122L-20.557 7.814M25.008 49.398L-18.865 6.09M26.7 47.674L-17.174 4.366M28.392 45.95L-15.482 2.643M30.084 44.227L-13.79.918M31.776 42.503L-12.098-.806M33.468 40.779L-10.406-2.53M35.16 39.055L-8.714-4.254M36.852 37.33L-7.022-5.977M38.543 35.607L-5.33-7.702M40.235 33.883L-3.638-9.426M41.927 32.159L-1.946-11.15M43.62 30.435L-.256-12.874M45.311 28.71L1.437-14.597M47.003 26.987L3.129-16.322M48.695 25.263L4.82-18.046M50.402 23.564L6.528-19.745M52.104 21.85L8.231-21.458M53.807 20.137L9.933-23.172M55.509 18.423L11.635-24.886M57.211 16.71L13.337-26.6M58.913 14.996L15.04-28.313"/>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}
export default SVGStar