/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { StyledButton } from '../../Components/StyledButton';
import { StyledHeader } from '../../Components/StyledHeader';
import { StyledFormItem } from "../../Components/StyledFormItem";
import { StyledWrapper } from "../../Components/StyledWrapper";
import { UserAddOutlined} from '@ant-design/icons'
import { Form } from "antd";
import { StyledContainer } from "../../Components/StyledContainer";
import { StyledInput } from "../../Components/StyledInput";
import StyledBackground from "../../Components/StyledBackground";
import { StyledNavbar } from "../../Components/StyledNavbar";
import { StyledLink } from "../../Components/StyledLink";


const Subscribe = () => {
  const [form] = Form.useForm();
  const [isDisabled, setIsDisabled] = useState(true)

  const onFieldsChange = (_, field) => {
    if ((field.every(object =>object.errors.length === 0)) 
    && field.every(object => !!object.value)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  const onSubmit = async values => {
    console.log(values);
    const { email, firstName, lastName, phone } = values;
    const headers = {
      "Content-Type": "application/json"
    };
    const body = {
      email,
      firstName,
      lastName,
      phone
    };
    try {
      await axios.post("/api/subscribe", body, { headers });
      form.resetFields();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <StyledBackground />
    <StyledContainer>
      <StyledWrapper>
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
          <StyledFormItem
            label="Email"
            name="email"
            colon={false}
            required={false}
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
            <StyledInput type="email" required />
          </StyledFormItem>
          <StyledFormItem
            label="First Name"
            name="firstName"
            colon={false}
            required={false}
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
            <StyledInput type="text" required />
          </StyledFormItem>
          <StyledFormItem
            label="Last Name"
            name="lastName"
            colon={false}
            required={false}
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
            <StyledInput type="text" required />
          </StyledFormItem>
          <StyledFormItem
            label="Phone Number"
            name="phone"
            colon={false}
            required={false}
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
            <StyledInput type="phone" required />
          </StyledFormItem>
          <Form.Item noStyle>
            <StyledButton disabled={isDisabled} block htmlType="submit">Subscribe</StyledButton>
          </Form.Item>
        </Form>
        <StyledNavbar>
          <StyledLink to="/findSubscriber">Find Subscriber</StyledLink>
          <StyledLink to="/unsubscribe">Unsubscribe</StyledLink>
        </StyledNavbar>
      </StyledWrapper>
    </StyledContainer>
    </>
  );
};

export default Subscribe;
