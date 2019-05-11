import React, { Component } from "react";
import { Table, Modal, Row, Col, Form, DatePicker, Select, Tabs } from "antd";
const Option = Select.Option;
const TabPane = Tabs.TabPane;

class B extends Component {
    constructor() {
        super();
        this.state = {
            visibleCY: false,
            visibleXX: false,
            columns: [
                {
                    title: "事故日期",
                    dataIndex: "rq"
                },
                {
                    title: "事故名称",
                    dataIndex: "mc"
                },
                {
                    title: "事故种类",
                    dataIndex: "zl"
                },
                {
                    title: "事故等级",
                    dataIndex: "dj"
                },
                {
                    title: "调查组成立时间",
                    dataIndex: "clsj"
                },
                {
                    title: "操作",
                    key: "cz",
                    render: (text, record) => (
                        <span>
                            {record.key === "1" ? (
                                <a onClick={this.showModalCY}>成立调查组</a>
                            ) : (
                                <a onClick={this.showModalXX}>调查信息录入</a>
                            )}
                        </span>
                    )
                }
            ],
            data: [
                {
                    key: "1",
                    rq: "2019-05-06",
                    mc: "浙江州货碰撞",
                    zl: "碰撞",
                    dj: "小事故",
                    clsj: "未成立"
                },
                {
                    key: "2",
                    rq: "2019-04-06",
                    mc: "0406巨富与无碰撞",
                    zl: "碰撞",
                    dj: "小事故",
                    clsj: "2019-05-05"
                }
            ]
        };
    }
    showModalCY = () => {
        this.setState({
            visibleCY: true
        });
    };

    showModalXX = () => {
        this.setState({
            visibleXX: true
        });
    };

    handleOk = e => {
        this.setState({
            visibleXX: false,
            visibleCY: false
        });
    };

    handleCancel = e => {
        this.setState({
            visibleXX: false,
            visibleCY: false
        });
    };
    render() {
        return (
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data} />

                <Modal title="调查组信息" width={680} visible={this.state.visibleCY} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 18 }}>
                        <Form.Item label="调查组成立时间">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="调查组成员">
                            <Select mode="multiple" style={{ width: "100%" }} placeholder="请选择成员" optionLabelProp="value">
                                <Option value="李四">
                                    <Row style={{ textAlign: "center" }}>
                                        <Col span={3}>李四</Col>
                                        <Col span={4}>A123213</Col>
                                        <Col span={9}>交通运输部海事局</Col>
                                        <Col span={3}>不涉外</Col>
                                        <Col span={5} />
                                    </Row>
                                </Option>
                                <Option value="王五">
                                    <Row style={{ textAlign: "center" }}>
                                        <Col span={3}>王五</Col>
                                        <Col span={4}>Br15234</Col>
                                        <Col span={9}>交通运输部海事局</Col>
                                        <Col span={3}>涉外</Col>
                                        <Col span={5}>高级调查官</Col>
                                    </Row>
                                </Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="调查组组长">
                            <Select style={{ width: 120 }}>
                                <Option value="李四">李四</Option>
                                <Option value="王五">王五</Option>
                            </Select>
                        </Form.Item>
                    </Form>
                </Modal>

                <Modal title="调查信息录入" width={680} visible={this.state.visibleXX} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Tabs type="card">
                        <TabPane tab="调查信息" key="1">
                            <Row gutter={12} style={{ lineHeight: "28px" }}>
                                <Col span={4} style={{ textAlign: "right" }}>
                                    事故时间:
                                </Col>
                                <Col span={20}>2019-05-06 01:20:00</Col>
                            </Row>
                            <Row gutter={12} style={{ lineHeight: "28px" }}>
                                <Col span={4} style={{ textAlign: "right" }}>
                                    是否境外事故:
                                </Col>
                                <Col span={20}>境内</Col>
                            </Row>
                            <Row gutter={12} style={{ lineHeight: "28px" }}>
                                <Col span={4} style={{ textAlign: "right" }}>
                                    事故等级:
                                </Col>
                                <Col span={20}>重大事故</Col>
                            </Row>
                            <Row gutter={12} style={{ lineHeight: "28px" }}>
                                <Col span={4} style={{ textAlign: "right" }}>
                                    事故种类:
                                </Col>
                                <Col span={20}>碰撞</Col>
                            </Row>
                            <Row gutter={12} style={{ lineHeight: "28px" }}>
                                <Col span={4} style={{ textAlign: "right" }}>
                                    是否造成污染:
                                </Col>
                                <Col span={20}>否</Col>
                            </Row>
                            <Row gutter={12} style={{ lineHeight: "28px" }}>
                                <Col span={4} style={{ textAlign: "right" }}>
                                    事故辖区:
                                </Col>
                                <Col span={20}>天津海事局</Col>
                            </Row>
                            <Row gutter={12} style={{ lineHeight: "28px" }}>
                                <Col span={4} style={{ textAlign: "right" }}>
                                    事故地点:
                                </Col>
                                <Col span={20}>天津港口</Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="船舶信息" key="2">
                            船舶信息
                        </TabPane>
                        <TabPane tab="触损的设施" key="3">
                            触损的设施
                        </TabPane>
                        <TabPane tab="原因信息" key="4">
                            原因信息
                        </TabPane>
                        <TabPane tab="专家论证" key="5">
                            专家论证
                        </TabPane>
                        <TabPane tab="调查报告评议" key="6">
                            调查报告评议
                        </TabPane>
                        <TabPane tab="调查结论" key="7">
                            调查结论
                        </TabPane>
                        <TabPane tab="行政处罚" key="8">
                            行政处罚
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        );
    }
}

export default B;
