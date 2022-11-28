import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import axios from 'axios';

import './index.css'

class FormRegister extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16, offset: 2 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 24,
                    offset: 0,
                },
            },
        };
        const { getFieldDecorator } = this.props.form;
        const handleSubmit = e => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    axios.post('/hydrologyAPI/register/', { "name": values.username, "email": values.username, "password": values.password }).then((response) => {
                        console.log(response.data.code, response)
                        if (response.status === 200) {
                            if (response.data.code === 0) {
                                message.success('注册成功，正在跳转！');
                                setTimeout(() => this.props.history.push("/login"), 3000);
                            }
                            else if (response.data.code === -1) {
                                message.warning('用户名或邮箱已被注册！');
                            }
                            else {
                                message.error('注册失败，请稍后重试！');
                            }
                        }
                        else {
                            message.error('网络错误，请稍后重试！');
                        }

                    });

                }
            });
        };
        const compareToFirstPassword = (rule, value, callback) => {
            const { form } = this.props;
            if (value && value !== form.getFieldValue('password')) {
                callback('两次输入的密码不一致！');
            } else {
                callback();
            }
        };

        const validateToNextPassword = (rule, value, callback) => {
            const { form } = this.props;
            if (value && this.state.confirmDirty) {
                form.validateFields(['confirm'], { force: true });
            }
            callback();
        };

        const handleConfirmBlur = e => {
            const { value } = e.target;
            this.setState({ confirmDirty: this.state.confirmDirty || !!value });
        };

        return (
            <div className='register-bg'>
                <Card className='register-card' headStyle={{ textAlign: "center" }} title="注册">

                    <Form {...formItemLayout} onSubmit={handleSubmit} className="register-form">
                        <Form.Item label="账户名称" hasFeedback>
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true, message: '请输入您的用户名！'
                                    },
                                    {
                                        pattern: /^[a-zA_Z0-9]*$/, message: '用户名只允许字母和数字！'
                                    }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="电子邮箱" hasFeedback>
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: '电子邮箱格式不合法！',
                                    },
                                    {
                                        required: true,
                                        message: '请输入您的电子邮箱！',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="输入密码" hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入您的密码！',
                                    },
                                    {
                                        validator: validateToNextPassword,
                                    },
                                    {
                                        min: 6,
                                        message: '密码长度应大于6个字符！',
                                    },
                                ],
                            })(<Input.Password />)}
                        </Form.Item>
                        <Form.Item label="确认密码" hasFeedback>
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请再次输入您的密码！',
                                    },
                                    {
                                        validator: compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password onBlur={handleConfirmBlur} />)}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" className='register-form-button'>
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(FormRegister)