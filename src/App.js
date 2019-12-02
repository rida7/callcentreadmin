import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Table from './containers/tablePage/index'
import Login from './containers/loginPage/index'



export default  () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path={"/"} component={Table}/>
            </Switch>
        </BrowserRouter>
    );
}