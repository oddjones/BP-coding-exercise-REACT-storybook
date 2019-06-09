import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AssignWorkers from './AssignWorkers'

storiesOf('AssignWorkers', module)
    .add('default', () => <AssignWorkers />);

