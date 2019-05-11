import React, { Component } from "react";
import { Table, Divider } from "antd";

const columns = [
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
                <a href="javascript:;">成立调查组</a>
            </span>
        )
    }
];

const data = [
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
];

class B extends Component {
    render() {
        return <Table columns={columns} dataSource={data} />;
    }
}

export default B;
