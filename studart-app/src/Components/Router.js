import React from "react";
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import App from './App';
import Workflows from './Workflows';
import NotFound from './NotFound';

const Router = () => (
<BrowserRouter>
    <Switch>
    <Route exact path="/" component={App} />
        <Route exact path="/Workflows.html" component={Workflows} />
        <Route component={NotFound} />
    </Switch>
</BrowserRouter>

)

export default Router;