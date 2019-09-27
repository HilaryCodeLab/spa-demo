import React from 'react'
import Player from './Player'
import FullRoster from './FullRoster'
import {Switch,Route} from "react-router-dom";

const Roster = () => (

    <Switch>
        <Route exact path='/roster' component={FullRoster}/>
        <Route path='/roster/:number' component={Player}/>
    </Switch>

)

export default Roster