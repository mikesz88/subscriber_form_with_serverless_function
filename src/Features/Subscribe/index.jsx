/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { StyledButton } from '../../Components/StyledButton';
import { StyledHeader } from '../../Components/StyledHeader';
import { UserAddOutlined} from '@ant-design/icons'
import { Form, Input } from "antd";

const Subscribe = () => {
  const [form] = Form.useForm();
  const [isDisabled, setIsDisabled] = useState(true)

  const onFieldsChange = (_, field) => {
    console.log(field);
    if ((field.every(object =>object.errors.length === 0)) 
    && field.every(object => !!object.value)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  const onSubmit = async e => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json"
    };
    const body = {
      // email,
      // firstName,
      // lastName,
      // phone
    };
    try {
      await axios.post("/api/subscribe", body, { headers });
      // resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ backgroundColor: '#06283D', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <StyledHeader>
      <UserAddOutlined />
        Subscribe
      <UserAddOutlined />
      </StyledHeader>
      <Form
        name="subscribe"
        form={form}
        onFinish={onSubmit}
        onFieldsChange={onFieldsChange}
        autoComplete="off"
        labelAlign="left"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 20,
        }}
        size="large"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email', 
              message: 'Please write a valid email'
            },
            {
              required: true,
              message: 'Please write your email'
            }
          ]}
        >
          <Input type="email" required />
        </Form.Item>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              pattern: /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/,
              message: 'This is not a proper name'
            },
            {
              required: true,
              message: 'Please write your first name'
            }
          ]}
        >
          <Input type="text" required />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              pattern: /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/,
              message: 'This is not a proper name'
            },
            {
              required: true,
              message: 'Please write your Last name'
            }
          ]}
        >
          <Input type="text" required />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            {
              pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
              message: 'Please write a proper phone number'
            },
            {
              required: true,
              message: 'Please write your phone number'
            }
          ]}
        >
          <Input type="phone" required />
        </Form.Item>
        <Form.Item noStyle>
          <StyledButton disabled={isDisabled} block htmlType="submit">Subscribe</StyledButton>
        </Form.Item>
      </Form>
      <nav>
        <Link to="/findSubscriber">Find Subscriber</Link> |{" "}
        <Link  to="/unsubscribe">Unsubscribe</Link>
      </nav>
    </div>
  );
};

export default Subscribe;
