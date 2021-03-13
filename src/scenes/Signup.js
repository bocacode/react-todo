import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../App'
import { Form, Input, Button } from 'antd'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

function Signup() {
  const { setUser, fbAuth } = useContext(UserContext)
  let history = useHistory()
  const onFinish = ({ email, password }) => {
    fbAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        setUser(res.user)
        console.log(res.user)
        history.push('/')
      })
      .catch(err => console.log(err.message))
  }
  const onFinishFailed = () => {
    console.log('Sign in Failed')
  }
  return (
    <section style={{ padding: '2rem' }}>
      <h1>Sign up</h1>
      <Form
        {...layout}
        name="signup"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
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
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Sign up
        </Button>
        </Form.Item>
      </Form>
    </section>
  )
}

export default Signup