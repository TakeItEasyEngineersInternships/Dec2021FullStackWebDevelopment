import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Login = lazy(() => import('../login/login'));
const Signup = lazy(() => import('../signup/signup'));
const Dashboard = lazy(() => import('../dashboard/dashboard'));

export default class main extends Component {
    
    privateRoute = (children) => {
        const auth = localStorage.getItem("loginUserData")
        return auth ? children : <Navigate to="/login" />;
    }


    render() {
        return (
            <Suspense fallback={<div></div>}>
                <Routes>
                    <Route path="*" element={<Navigate to="/login" />} />                    
                    <Route exact path="/login" element={<Login  />} ></Route>
                    <Route exact path="/signup" element={<Signup />} ></Route>                    
                    <Route exact path="/dashboard"
                        element={this.privateRoute(<Dashboard />)} >
                    </Route>
                </Routes >
            </Suspense>
        )
    }
}
