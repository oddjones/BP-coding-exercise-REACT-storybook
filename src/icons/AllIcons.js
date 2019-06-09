import React from 'react';

import SVGMenu from './MenuIcon'
import SVGEye from './EyeIcon'
import SVGEllipsis from './MoreIcon'
import SVGPlay from './Playicon'
import SVGGear from './GearIcon'
import SVGStar from './StarIcon'
import SVGPause from './PauseIcon'



export const MenuIcon = props => <SVGMenu size='36' alt='Menu' {...props} />
export const EyeIcon = props => <SVGEye size='36' alt='view' {...props} />
export const MoreIcon = props => <SVGEllipsis size='36' alt='More' {...props} />
export const PlayIcon = props => <SVGPlay size='36' alt='start process' {...props} />
export const GearIcon = props => <SVGGear size='36' fillcolor='#0E5D90' alt='settings' {...props} />
export const StarIcon = props => <SVGStar fillcolor='#FFCE2B' alt='alt text' {...props} />
export const PauseIcon = props => <SVGPause size='36' size='36' {...props} />
