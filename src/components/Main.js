import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'

const Main =()=>(

    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            {/*
                /   only this path for home
            */}
            <Route path='/roster' component={Roster}/>
            {/*
                /roster     retrieve ALL players
                /roster/3   retrieve player 3 only
            */}
            <Route path='/schedule' component={Schedule}/>
        </Switch>
    </main>


);

export default Main
