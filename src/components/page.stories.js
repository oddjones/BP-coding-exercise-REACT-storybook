import React from 'react'
import { storiesOf } from '@storybook/react';
import Header from './Header';
import ProcessList from './ProcessList';

const PageWrapper = storyFn => <div className="container grid-lg">{storyFn()}</div>

storiesOf('Pages',module)
    .addDecorator(PageWrapper)
        .add('default', () => <><Header /><ProcessList /></>)
