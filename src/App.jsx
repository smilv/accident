import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
import "antd/dist/antd.css";
import Routes from "./route/index";

class App extends Component {
    render() {
        return (
            <LocaleProvider locale={zh_CN}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </LocaleProvider>
        );
    }
}

export default App;
