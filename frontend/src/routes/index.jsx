import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../pages/Home';
import Contact from '../pages/Contact';

export default function appRouter(){
    return (
        <Router>
            <Switch>
                <Route path="/contato" component={Contact} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}