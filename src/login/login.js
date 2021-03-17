import React from 'react';
import { Modal, Button } from 'antd';
import Draggable from 'react-draggable';
import './login.css';
import { Row, Col, Card } from 'antd';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Register from '../register/register';




class Login extends React.Component {
    draggleRef = React.createRef();
    constructor(props) {
        super(props)

        this.state = {
            loginVisible: false,
            regVisible: false,
            bounds: { left: 0, top: 0, bottom: 0, right: 0 },
            username: '',
            password: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleCancel = () => {
        console.log();
        this.props.handleCancel()
        
    };

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
        const { bounds, visible } = this.props;
        return (
            <>
                <Modal visible={visible}
                    onCancel={() => this.props.handleCancel()}
                    title={

                        <div 
                            style={{
                                width: '100%',
                                cursor: 'move',
                                translate: 'no'
                            }}

                        >
                            Login
            </div>
                    }

                    footer={null}
                    modalRender={modal => (
                        <Draggable
                            bounds={bounds}
                            onStart={(event, uiData) => this.onStart(event, uiData)}
                        >
                            <div ref={this.draggleRef}>{modal}</div>
                        </Draggable>
                    )}
                >
                    <Row  >
                        <Col sm={12} xs={24}>
                            <Card >
                                <img className="loginimage" src="/images/mobilelogin.jpg" alt="logo" />
                            </Card>
                        </Col>
                        <Col sm={12} xs={24} >
                            <Form

                                hidden={false}
                                name="normal_login"
                                className="login-form"

                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={this.onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    value={this.username}
                                    onChange={e => this.setState({ username: e.target.value })}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Username!',
                                        },
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    value={this.password}
                                    onChange={e => this.setState({ password: e.target.value })}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" shape="round" htmlType="submit" onClick={this.handleSubmit} className="login-form-button">
                                        Log in
                                </Button><br /> <br /> <br />
                                    <p style={{ color: "rgb(255, 51, 0)", fontWeight: 'bold' }}>are you new?</p>
                                    <Button type="link" type="outlined" onClick={() => this.props.openReg() } 
                                    > Register</Button>
                                   
                          
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>

                </Modal>
            </>
        );
    }
}

export default Login;