import React, { Component } from "react";
import { Form, DatePicker, Select, Input, Button } from "antd";
const Option = Select.Option;

class A extends Component {
    handleSubmit = () => {
        this.props.history.push("/demoa/b");
    };
    render() {
        return (
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
                <Form.Item label="负责人">
                    <Input />
                </Form.Item>
                <Form.Item label="联系电话">
                    <Input />
                </Form.Item>
                <Form.Item label="填表时间">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="填表人">
                    <Input value="张三" />
                </Form.Item>
                <Form.Item label="事故时间">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="船舶名称">
                    <Input />
                </Form.Item>
                <Form.Item label="事故等级">
                    <Select defaultValue="lucy" style={{ width: 120 }}>
                        <Option value="jack">一级</Option>
                        <Option value="lucy">二级</Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                    <Button type="primary" onClick={this.handleSubmit}>
                        录入
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default A;
