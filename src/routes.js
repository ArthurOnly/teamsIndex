import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

//Pages
import MainPage from './pages/mainPage'
import TeamPage from './pages/team'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <MainPage/>
                </Route>
                <Route exact path='/:team'>
                    <TeamPage/>
                </Route>
                <Route path='/:team/:titleNews'>
                    <TeamPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}