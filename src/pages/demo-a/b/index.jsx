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
        title: "操作",
        key: "cz",
        render: (text, record) => (
            <span>
                <a href="javascript:;">上报</a>
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
        ss: "0",
        sw: "0",
        jjss: "1",
        cc: "0",
        gxq: "杭州市地方海事处"
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
        gxq: "珠海海事处"
    },
    {
        key: "3",
        rq: "2019-05-06",
        mc: "浙江州货碰撞",
        zl: "碰撞",
        dj: "小事故",
        ss: "0",
        sw: "0",
        jjss: "1",
        cc: "0",
        gxq: "杭州市地方海事处"
    },
    {
        key: "4",
        rq: "2018-11-06",
        mc: "中石火灾/爆炸",
        zl: "火灾/爆炸",
        dj: "一般小事故",
        ss: "0",
        sw: "0",
        jjss: "1",
        cc: "0",
        gxq: "杭州市地方海事处"
    },
    {
        key: "5",
        rq: "2019-05-06",
        mc: "浙江州货碰撞",
        zl: "碰撞",
        dj: "小事故",
        ss: "0",
        sw: "0",
        jjss: "2",
        cc: "1",
        gxq: "洋山海事处"
    }
];

class B extends Component {
    render() {
        return <Table columns={columns} dataSource={data} />;
    }
}

export default B;
