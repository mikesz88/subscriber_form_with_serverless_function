import React, { useState } from 'react'
import axios from 'axios';
import StyledBackground from '../../Components/StyledBackground';
import { StyledContainer } from '../../Components/StyledContainer';
import { StyledWrapper } from '../../Components/StyledWrapper';
import { StyledHeader } from '../../Components/StyledHeader';
import { UserOutlined } from '@ant-design/icons'
import { Form, Modal, Spin } from 'antd';
import { StyledFormItem } from '../../Components/StyledFormItem';
import { StyledInput } from '../../Components/StyledInput';
import { StyledButton } from '../../Components/StyledButton';
import { StyledNavbar } from '../../Components/StyledNavbar';
import { StyledLink } from '../../Components/StyledLink';
import { StyledTableHeader } from '../../Components/StyledTableHeader';

const FindSubscriber = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const onSubmit = async values => {
    setIsLoading(true);
    console.log(values);
    const headers = {
      "Content-Type": "application/json"
    };
    const body = {
      params: {
        email: values.email,
      }
    }
    try {
      const response = await axios.get("/api/subscribe", body, { headers })
      success(response.data[0]);
      setIsLoading(false);
      form.resetFields();
    } catch (error) {
      failure();
      setIsLoading(false);
      console.error(error);
    }
  }

  const success = (subscriberData) => {
    Modal.success({
      maskClosable: true,
      centered: true,
      title: 'Subscriber Found',
      content: (
        <div key={subscriberData.id}>
          <table>
            <tbody>
              <tr>
                <StyledTableHeader>Email:</StyledTableHeader>
                <td>{subscriberData.email_address}</td>
              </tr>
              <tr>
                <StyledTableHeader>First Name:</StyledTableHeader>
                <td>{subscriberData.first_name}</td>
              </tr>
              <tr>
                <StyledTableHeader>Last Name:</StyledTableHeader>
                <td>{subscriberData.fields.last_name}</td>
              </tr>
              <tr>
                <StyledTableHeader>Phone Number:</StyledTableHeader>
                <td>{subscriberData.fields.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    })
  }

  const failure = () => {
    Modal.error({
      maskClosable: true,
      centered: true,
      title: 'Email Not Found',
      content: `
      There was no subscriber found with that email.
      Try again with another email.
      `
    })
  }

  return (
    <>
      <StyledBackground />
      <StyledContainer>
        <Spin spinning={isLoading}>
          <StyledWrapper>
            <StyledHeader>
              <UserOutlined />
              Find Subscriber
              <UserOutlined />
            </StyledHeader>
            <Form
              name='findSubscriber'
              form={form}
              onFinish={onSubmit}
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
                label="Email Address"
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
              <Form.Item noStyle>
                <StyledButton block htmlType='submit'>FIND</StyledButton>
              </Form.Item>
            </Form>
            <StyledNavbar>
              <StyledLink to="/">Subscribe</StyledLink>
              <StyledLink to="/unsubscribe">Unsubscribe</StyledLink>
            </StyledNavbar>
          </StyledWrapper>
        </Spin>
      </StyledContainer>
    </>
  )
}

export default FindSubscriber