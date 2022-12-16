import {
    Button,
    message,
    Form,
    Input,
    Card,
} from 'antd';
import React from 'react';
import axios from 'axios';


import "./index.css"

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
            offset: 2 
        },
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
const App = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        // console.log('Received values of form: ', values);
        axios.post('/hydrologyAPI/register/', { "name": values.username, "email": values.email, "password": values.password }).then((response) => {
            console.log(response.data.code, response)
            if (response.status === 200) {
                if (response.data.code === 0) {
                    message.success('注册成功，正在跳转！');
                    setTimeout(() => window.location.href="/login", 3000);
                    // setTimeout(() => this.props.history.push("/login"), 3000);
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
    };
    return (
        <div className='register-bg'>
            <Card className='register-card' headStyle={{ textAlign: "center" }} title="注册">
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                    className="register-form"
                >
                    <Form.Item
                        name="username"
                        label="账户名称"
                        // tooltip="您希望其他用户如何称呼您？"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的用户名！',
                                whitespace: true,
                            },
                            {
                                pattern: /^[a-zA_Z0-9]*$/, message: '用户名只允许字母和数字！'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="电子邮箱"
                        rules={[
                            {
                                type: 'email',
                                message: '不是合法的电子邮箱格式！',
                            },
                            {
                                required: true,
                                message: '请输入您的电子邮箱！',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="输入密码"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的密码！',
                            },
                            {
                                min: 6,
                                message: '密码长度应大于6个字符！',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="确认密码"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请再次输入您的密码！',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('两次输入的密码不一致！'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    {/* <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>
                    </Form.Item> */}
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" className='register-form-button'>
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

        </div>
    );
};
export default App;
