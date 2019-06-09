import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header'


const HeaderWrapper = storyFn => <div className="container grid-lg">{storyFn()}</div>

storiesOf('Header', module)
    .addDecorator(HeaderWrapper)
    .add('default view', () => <Header />);