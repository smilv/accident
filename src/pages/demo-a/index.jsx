import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import A from "./a";
import B from "./b";
import C from "./c";

class DemoA extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/demoa/a" component={A} />
                    <Route path="/demoa/b" component={B} />
                    <Route path="/demoa/c" component={C} />
                    <Redirect to="/demoa/a" />
                </Switch>
            </div>
        );
    }
}

export default DemoA;
