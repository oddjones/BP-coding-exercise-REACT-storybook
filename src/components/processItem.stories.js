import React from 'react'

import { storiesOf } from '@storybook/react';

import ProcessItem from './ProcessItem';

const MockList = storyFn => <div className="container grid-lg"><section className="columns content"><ul className="column col-8 col-md-12 col-mx-auto processList">{storyFn()}</ul></section></div>

storiesOf('Process',module)
    .addDecorator(MockList)
    .add('default', () => <ProcessItem 
                                processName = 'Reticulate Splines' 
                                processDescription='Whilst oscillating wildly' 
                                progressValue='20' 
                                priority='2' 
                                noWorkers='5'
                                noTasks='6'
                                tasksCompleted='18'
                                avgTaskTime='12s'
                                timeRemaining='01:12hr'
                                />)
    .add('list', () => <><ProcessItem processName = 'Reticulate Splines' processDescription='Whilst oscillating wildly' progressValue='20' priority='2' noWorkers='5' noTasks='6' tasksCompleted='18' avgTaskTime='12s' timeRemaining='01:12hr' /><ProcessItem processName = 'Extend Metacarpals' processDescription='Existential ephemera' progressValue='00' priority='0' noWorkers='0' noTasks='6' tasksCompleted='18' avgTaskTime='12s' timeRemaining='01:12hr' /></>)