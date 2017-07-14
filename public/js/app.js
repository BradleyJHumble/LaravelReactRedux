import React from "react";
import ReactDOM from "react-dom";
import {Router,Redirect, Route, IndexRoute, hashHistory} from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Users from "./components/Users";
import Articles from "./components/Articles";
const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory }>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}/>
            <Route path="users" component={Users}/>
            <Route path="articles" component={Articles}/>
        </Route>
    </Router>,
app);