import { LockOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Button, Checkbox, Form, Input, Card, message } from 'antd';
import React from 'react';
import "./index.css"
class FormLogin extends React.Component {
    render() {
        const onFinish = (values) => {
            // console.log('Received values of form: ', values);
            axios.post('/hydrologyAPI/login/', { "email": values.username, "password": values.password }).then((response) => {
                // console.log(response.data.code, response)
                if (response.status === 200) {
                    if (response.data.code === 0) {
                        message.success('登录成功，正在跳转！');
                        // if (source_page !== undefined) {
                        //     setTimeout(() => this.props.history.push(source_page), 3000);
                        // }
                        // else {
                        // }
                        setTimeout(() => this.props.history.push("/search"), 3000);

                    }
                    else if (response.data.code === -1) {
                        message.warning('用户名或密码错误！');
                    }
                    else {
                        message.error('登录失败，请稍后重试！');
                    }
                }
                else {
                    message.error('网络错误，请稍后重试！');
                }

            });
        };
        return (
            <div className='login-bg'>

                <Card className='login-card' headStyle={{ textAlign: "center" }} title="登录">

                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名！',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码！',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住账号</Checkbox>
                            </Form.Item>

                            {/* <a className="login-form-forgot" href="">
                                Forgot password
                            </a> */}
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                            </Button>
                        </Form.Item>
                        没有账号？<a href="/register">注册账号</a>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default FormLogin;