import React, {Component} from 'react';

import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import {About, Contact, Events, PageTemplate, Products, Whoops404} from './components/menu/pages'

class App extends Component {
    render() {
        return <Router>
            <div className="main">
                <Switch>
                    <Redirect exact from="/" to="about"/>
                    <Route path="/about" component={About}/>
                    {/*<Route path="/events" component={Events}/>*/}
                    <Route path="/products" component={Products}/>
                    <Route path="/contact" component={Contact}/>
                    {/*<Route component={Whoops404}/>*/}
                </Switch>
            </div>
        </Router>;
    }
}

export default App;