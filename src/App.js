import React, {Component} from 'react';

import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import {Whoops404} from './components/menu/pages'
import {ContactView} from './components/menu/contact/Contact-view'
import {AboutView} from "./components/menu/about/About-view";
import {PostListView} from "./components/post-list/PostList-view";
import AuthView from "./components/auth/Auth-view";

class App extends Component {
    render() {
        console.log(process.env.REACT_APP_SERVER_HOST);
        return <Router>
            <div className="main">
                <Switch>
                    <Redirect exact from="/" to="about"/>
                    <Route path="/about" component={AboutView}/>
                    <Route path="/contacts" component={ContactView}/>
                    <Route path="/posts" component={PostListView}/>
                    <Route path="/auth" component={AuthView}/>
                    <Route component={Whoops404}/>
                </Switch>
            </div>
        </Router>;
    }
}

export default App;