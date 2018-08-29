import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../App'
import Recipe from './Recipe';

const Router = () => (
    <div>
        <BrowserRouter>
           <Switch> 
                <Route path="/" component={App} exact/>
                <Route path="/recipe/:id" component={Recipe}/>
            </Switch>
        </BrowserRouter>
    </div>
)

export default Router