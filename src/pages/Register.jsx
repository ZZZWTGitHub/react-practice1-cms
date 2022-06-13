import React from 'react'
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import "./less/Login.less"
import logoImg from "../assets/logo_moviee.png"
import { Link } from 'react-router-dom'

export default function Register() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login'>
      <div className='loginBox'>
        <img src={logoImg} alt="logo_moviee" />
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder='Please input your username!' />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder='Please input your password!' />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('The two passwords not the same!'));
                },
              }),
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder='Repeat input your password!' />
          </Form.Item>

          <Form.Item
            name="login"
            valuePropName="checked"
            wrapperCol={{
              offset: 2,
              span: 16,
            }}
          >
            <Link to='/login'>login now</Link>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 2,
              span: 20,
            }}
          >
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
