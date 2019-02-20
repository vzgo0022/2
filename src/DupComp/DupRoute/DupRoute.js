import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';



const DupRoute = ({ array }) => (
    <Fragment>{array.map(({
        component,
        render,
        children,
        path,
        id,
        exact,
        strict,
        location,
        sensitive
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
                sensitive={sensitive} />)
    )}</Fragment>)



export default DupRoute;





