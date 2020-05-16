import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RouteHandler = ({component: Component, loggedIn, ...rest}) => {
    return (
        <Route
          {...rest}
          render={(props) => loggedIn
            ? <Component {...props} />
            : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
      )
};

export default RouteHandler;