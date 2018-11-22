import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';


export const PrivateRoute = ({
    isAuthenticated, 
    component: Component, // calling component as Component convetion
    ...rest //access to all of the other objects porps
}) => (
    <Route {...rest} component = { (props)=>(
        isAuthenticated ? (
             <div>
                <Header />
                <Component {...props}/>
            </div>
        ) : (
            <Redirect to="/" />
        )

    )}/>
);

const mapStateToProps = (state) =>({
    isAuthenticated : !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);