import React, { Component } from "react";
import { Table, Modal, Button, Row, Col, Form, DatePicker, Select, Input } from "antd";
const Option = Select.Option;

class B extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
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
                            <a onClick={this.showModal}>成立调查组</a>
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
                    clsj: ""
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
    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = e => {
        this.setState({
            visible: false
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false
        });
    };
    render() {
        return (
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data} />

                <Modal title="调查组信息" width={680} visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 18 }}>
                        <Form.Item label="调查组成立时间">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="调查组成员">
                            <Select mode="multiple" style={{ width: "100%" }} placeholder="" optionLabelProp="value">
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
            </div>
        );
    }
}

export default B;
