import React from 'react'

import { storiesOf } from '@storybook/react';

import {MenuIcon, EyeIcon, MoreIcon, PlayIcon, GearIcon, StarIcon,PauseIcon} from '../icons/AllIcons'


storiesOf('icons',module)

.add('all', () =>
<>
Menu : <MenuIcon />&nbsp;View : <EyeIcon/>&nbsp;More : <MoreIcon />&nbsp;Play : <PlayIcon />&nbsp;Gear : <GearIcon />&nbsp;Star : <StarIcon fillcolor='#4e4e4e' alt='alt text'/> Pause : <PauseIcon size="36"/>
</>
)