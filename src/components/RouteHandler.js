import React from 'react';
import { Route } from 'react-router-dom';

export default ({ chidren, ...rest }) => {

    return (
        <Route {...rest}>
            {chidren}
        </Route>
    );
};
