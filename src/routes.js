import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

//Pages
import MainPage from './pages/team'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/:team'>
                    <MainPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}