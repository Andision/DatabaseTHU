import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Card, message } from 'antd';
import axios from 'axios';
import querystring from "querystring"

import './index.css'

class FormLogin extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const handleSubmit = e => {
            const source_page = querystring.parse(this.props.location.search.slice(1)).source

            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    // console.log('Received values of form: ', values);
                    // console.log(this)
                    axios.post('/hydrologyAPI/login/', { "email": values.username, "password": values.password }).then((response) => {
                        // console.log(response.data.code, response)
                        if (response.status === 200) {
                            if (response.data.code === 0) {
                                message.success('登录成功，正在跳转！');
                                if (source_page !== undefined) {
                                    setTimeout(() => this.props.history.push(source_page), 3000);
                                }
                                else {
                                    setTimeout(() => this.props.history.push("/search"), 3000);
                                }

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
                }
            });
        };

        return (
            <div className='login-bg'>
                <Card className='login-card' headStyle={{ textAlign: "center" }} title="登录">

                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名！' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码！' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: false,
                            })(<Checkbox>记住账号</Checkbox>)}
                            {/* <a className="login-form-forgot" href="/password">
                                忘记密码？
                            </a> */}
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            <a href="/register">注册账号</a>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(FormLogin)