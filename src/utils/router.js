import React from 'react'
import {Switch, Route} from 'react-router-dom'


import PopularRead from '../comps/PopularRead'
import NewestRead from '../comps/NewestRead'
import Landing from '../comps/Landing'
import About from '../comps/About'

export default(
    <Switch>
        <Route component={Landing} path='/' exact />
        <Route component={PopularRead} path="/popularReads"/>
        <Route component={NewestRead} path="/newestRead"/>
        <Route component={About} path='/about' />
    </Switch>
)