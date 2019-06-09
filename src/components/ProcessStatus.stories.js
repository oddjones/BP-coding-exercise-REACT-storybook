import React from 'react';
import { storiesOf } from '@storybook/react';

import ProcessStatus from './ProcessStatus'
import StatusSection from './StatusSection'

storiesOf('Process Status', module)
.add('default view', () => <ProcessStatus />)
.add('full status section', () => <StatusSection noWorkers='5' priority='2'/>);