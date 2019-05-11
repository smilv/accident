import React, { Component } from "react";
import { Table, Modal, Row, Col } from "antd";

class A extends Component {
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
                    title: "受伤",
                    dataIndex: "ss"
                },
                {
                    title: "死亡&失踪",
                    dataIndex: "sw"
                },
                {
                    title: "经济损失（万元）",
                    dataIndex: "jjss"
                },
                {
                    title: "沉船",
                    dataIndex: "cc"
                },
                {
                    title: "事故调查管辖权",
                    dataIndex: "gxq"
                },
                {
                    title: "立案状态",
                    dataIndex: "lazt"
                },
                {
                    title: "操作",
                    key: "cz",
                    render: (text, record) => (
                        <span>{record.key === "1" ? <a href="javascript:;">立案</a> : <a onClick={this.showModal}>结案</a>}</span>
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
                    ss: "0",
                    sw: "0",
                    jjss: "1",
                    cc: "0",
                    gxq: "杭州市地方海事处",
                    lazt: ""
                },
                {
                    key: "2",
                    rq: "2019-04-06",
                    mc: "0406巨富与无碰撞",
                    zl: "碰撞",
                    dj: "小事故",
                    ss: "0",
                    sw: "0",
                    jjss: "1",
                    cc: "1",
                    gxq: "珠海海事处",
                    lazt: "已立案"
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

                <Modal title="结案信息" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Row gutter={12} style={{ lineHeight: "32px" }}>
                        <Col span={6} style={{ textAlign: "right" }}>
                            正式报告名称:
                        </Col>
                        <Col span={18}>连云港"12.22"金旺"火灾/爆炸</Col>
                    </Row>
                    <Row gutter={12} style={{ lineHeight: "32px" }}>
                        <Col span={6} style={{ textAlign: "right" }}>
                            正式报告编号:
                        </Col>
                        <Col span={18}>MAIR061200201676</Col>
                    </Row>
                    <Row gutter={12} style={{ lineHeight: "32px" }}>
                        <Col span={6} style={{ textAlign: "right" }}>
                            正式报告:
                        </Col>
                        <Col span={18}>
                            <a>黄海“12.22”“KING”轮火灾事故调查报告（结案稿）.doc</a>
                        </Col>
                    </Row>
                    <Row gutter={12} style={{ lineHeight: "32px" }}>
                        <Col span={6} style={{ textAlign: "right" }}>
                            英文报告:
                        </Col>
                        <Col span={18}>连云港"12.22"金旺"火灾/爆炸</Col>
                    </Row>
                </Modal>
            </div>
        );
    }
}

export default A;
