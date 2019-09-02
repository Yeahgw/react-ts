import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import asyncComponent from './asyncComponent';

import App from './App';
import List from './components/list';
const Detail = asyncComponent(() => import('./components/detail'));

const routes = [
    {
        path: "/",
        component: App,
        children: [
            
        ]
    },
    {
        path: "/list-:id",
        component: List,
        meta: {
            query: {
                cateId: 1
            }
        }
    },
    {
        path: "/detail",
        component: Detail
    }
]

const RenderRoute = (route : any) => {
    return <Route exact path={route.path} render={ props => (<route.component {...props} routes={route.children} />) } />
};

const Routers = () => {
    return (
        <Router>
            {
                routes.map((route, index) => {
                    return <RenderRoute key={index} {...route} ></RenderRoute>
                })
            }
        </Router>
    )
};

export default Routers;