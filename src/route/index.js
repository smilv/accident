import React, { Component } from "react";
import { Route, Link, Switch, Redirect, withRouter } from "react-router-dom";
import { Menu, Layout } from "antd";
import DemoA from "../pages/demo-a";
import DemoB from "../pages/demo-b";

const SubMenu = Menu.SubMenu;
const { Sider, Content } = Layout;

class Routes extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Sider
                        style={{
                            overflow: "auto",
                            height: "100vh",
                            position: "fixed",
                            left: 0
                        }}
                    >
                        <Menu
                            theme="dark"
                            mode="inline"
                            openKeys={["/demoa"]}
                            selectedKeys={[this.props.location.pathname]}
                            style={{ borderRight: 0 }}
                        >
                            <SubMenu
                                key="/demoa"
                                title={
                                    <span>
                                        <span>演示一</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="/demoa/a">
                                    <Link to="/demoa/a">事故录入</Link>
                                </Menu.Item>
                                <Menu.Item key="/demoa/b">
                                    <Link to="/demoa/b">事故未上报</Link>
                                </Menu.Item>
                                <Menu.Item key="/demoa/c">
                                    <Link to="/demoa/c">事故已上报</Link>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="/demob">
                                <Link to="/demob">演示二</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ marginLeft: 200 }}>
                        <Content style={{ overflow: "initial" }}>
                            <div style={{ padding: "24px 36px", background: "#fff" }}>
                                <Switch>
                                    <Route path="/demoa" component={DemoA} />
                                    <Route path="/demob" component={DemoB} />
                                    <Redirect to="/demoa" />
                                </Switch>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default withRouter(Routes);
