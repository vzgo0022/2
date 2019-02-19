import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';



const DupRoute = ({ array }) => (
    <Fragment>{array.map(({
        component,
        render,
        children,
        path,
        exact,
        strict,
        location,
        sensitive,
        text
    }) => (
            <Route
                key={id}
                component={component}
                render={render}
                children={children}
                path={path}
                exact={exact}
                strict={strict}
                location={location}
                sensitive={sensitive}> {text} </Route>)
    )}</Fragment>)



export default DupRoute;





