import React, { Component } from "react";
import { Menu } from "antd";
import A from "./a";
import B from "./b";

class C extends Component {
    constructor() {
        super();
        this.state = {
            current: "1"
        };
    }
    handleClick = e => {
        this.setState({
            current: e.key
        });
    };
    render() {
        return (
            <div>
                <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick}>
                    <Menu.Item key="1">上报管理</Menu.Item>
                    <Menu.Item key="2">调查组管理</Menu.Item>
                </Menu>
                <div style={{ marginTop: "40px" }}>
                    {this.state.current === "1" && <A />}
                    {this.state.current === "2" && <B />}
                </div>
            </div>
        );
    }
}

export default C;
