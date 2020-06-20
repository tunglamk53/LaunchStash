import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../contexts/UserContext'

const RouteHandler = ({component: Component, ...rest}) => {
    const { loggedIn } = useContext(UserContext)

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
