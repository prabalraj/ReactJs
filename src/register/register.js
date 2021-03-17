import React from 'react';
import { Modal, Button } from 'antd';
import Draggable from 'react-draggable';
import './register.css';
import { Row, Col, Card } from 'antd';
import { Form, Input } from 'antd';

import { InputNumber } from 'antd';
import Login from '../login/login';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
const onFinish = (values) => {
    console.log(values);
};

class Register extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loginVisible: false,
            regVisible: false,
            bounds: { left: 0, top: 0, bottom: 0, right: 0 },
            username: "",
            email: '',
            age: '',
            password: '',

        }
    }


    draggleRef = React.createRef();



    handleCancel = e => {
        console.log(e);
        this.props.handleCancel()

    };
    handleSubmit = e => {
        console.log(this.state)

    }

    onStart = (event, uiData) => {
        const { clientWidth, clientHeight } = window?.document?.documentElement;
        const targetRect = this.draggleRef?.current?.getBoundingClientRect();
        this.setState({
            bounds: {
                left: -targetRect?.left + uiData?.x,
                right: clientWidth - (targetRect?.right - uiData?.x),
                top: -targetRect?.top + uiData?.y,
                bottom: clientHeight - (targetRect?.bottom - uiData?.y),
            },
        });
    };

    render() {
        const { bounds, disabled, visible } = this.props;
        return (
            <>
                <Modal
                    visible={visible}
                    onCancel={() => this.props.handleCancel()}
                    title={
                        <div
                            style={{
                                width: '100%',
                                cursor: 'move',
                            }}
                            onMouseOver={() => {
                                if (disabled) {
                                    this.setState({
                                        disabled: false,
                                    });
                                }
                            }}
                            onMouseOut={() => {
                                this.setState({
                                    disabled: true,
                                });
                            }}
                            onFocus={() => { }}
                            onBlur={() => { }}
                        >
                            Register
                        </div>
                    }
                    footer={null}
                    modalRender={modal => (
                        <Draggable
                            disabled={disabled}
                            bounds={bounds}
                            onStart={(event, uiData) => this.onStart(event, uiData)}
                        >
                            <div ref={this.draggleRef}>{modal}</div>
                        </Draggable>
                    )}
                >
                    <Row wrap={true}>
                        <Col sm={12} xs={24}>
                            <Card >
                                <img className="registerimage" src="/images/mobileregister.jpg" alt="logo" />
                            </Card>
                        </Col>
                        <Col sm={12} xs={24}>
                            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                <Form.Item
                                    name='username'
                                    label="username"
                                    onChange={e => this.setState({ username: e.target.value })}
                                    value={this.username}
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name='email'
                                    type="email"
                                    value={this.email}
                                    onChange={e => this.setState({ email: e.target.value })}
                                    label="Email"
                                    rules={[
                                        {
                                            required: true
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name='mobile'
                                    value={this.mobile}
                                    onChange={e => this.setState({ mobile: e.target.value })}
                                    label="mobile"
                                    rules={[
                                        {
                                            type: 'number',
                                        },
                                    ]}
                                >
                                    <InputNumber />
                                </Form.Item>
                                <Form.Item name='password'
                                    label="password"
                                    value={this.password}
                                    onChange={e => this.setState({ password: e.target.value })}
                                    rules={[
                                        {
                                            type: 'password',
                                            min: 0,
                                            max: 99,
                                            required: true

                                        },
                                    ]}>
                                    <Input />
                                </Form.Item>

                                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                    <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
                                        Submit
                                    </Button><br />
                                    <Button className="reg-login-button" type="link" shape="round" onClick={() => this.props.openLogin()}>Existing User?Login</Button>

                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>

                </Modal>
            </>
        );
    }
}

export default Register;