import React from 'react';
import { Switch } from 'react-router-dom';
import RouteHandler from './components/RouteHandler';

import Home from './pages/Home';

export default () => {
    return (
        <Switch>
            <RouteHandler path="/" component={Home} />
        </Switch>
    );
};