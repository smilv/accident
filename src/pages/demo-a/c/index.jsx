import React, { Component } from "react";
import { Tabs } from "antd";
import A from "./a";
import B from "./b";

const TabPane = Tabs.TabPane;

class C extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="上报管理" key="1">
                    <A />
                </TabPane>
                <TabPane tab="调查管理" key="2">
                    <B />
                </TabPane>
            </Tabs>
        );
    }
}

export default C;
