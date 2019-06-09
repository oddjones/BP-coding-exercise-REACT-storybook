import React from 'react';
import { storiesOf } from '@storybook/react';

import StarRating from './StarRating'
import SetPriority from './SetPriority'

storiesOf('star Rating',module)
    .add('lit', () => <StarRating state='true' alt='priority' />)
    .add('unlit', () => <StarRating state='false' alt='priority' />)
    .add('rating list', () => <SetPriority priority='2'/>)
