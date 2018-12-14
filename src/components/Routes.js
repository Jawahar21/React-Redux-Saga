import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import Dashboard from './Dashboard';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" component={Dashboard} />
        </BrowserRouter>
    );
}