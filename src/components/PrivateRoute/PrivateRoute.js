import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { emailContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [email, setEmail] = useContext(emailContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;