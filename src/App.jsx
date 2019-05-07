import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import Routes from "./route/index";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        );
    }
}

export default App;
