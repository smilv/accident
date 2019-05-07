import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Home from "../pages/home";

class Routes extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Home} />
                <div>1</div>
            </div>
        );
    }
}

export default Routes;
