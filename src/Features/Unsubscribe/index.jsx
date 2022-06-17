import React, { useState } from "react";
import axios from "axios";
import StyledBackground from "../../Components/StyledBackground";
import { StyledContainer } from "../../Components/StyledContainer";
import { StyledWrapper } from "../../Components/StyledWrapper";
import { StyledHeader } from "../../Components/StyledHeader";
import { UserDeleteOutlined } from "@ant-design/icons";
import { StyledNavbar } from "../../Components/StyledNavbar";
import { StyledLink } from "../../Components/StyledLink";
import { StyledFormItem } from "../../Components/StyledFormItem";
import { StyledInput } from "../../Components/StyledInput";
import { StyledButton } from "../../Components/StyledButton";
import { Form, Modal, Spin } from "antd";

const Unsubscribe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const onSubmit = async values => {
    setIsLoading(true);
    const headers = {
      "Content-Type": "application/json"
    };
    const body = {
      email: values.email
    }
    try {
      const response = await axios.get("/api/subscribe", { params: { email: values.email } }, { headers });
      console.log(response);
      if (response.data.length > 0) {
        await axios.put("/api/subscribe", body, { headers });
        success();
        form.resetFields();
        setIsLoading(false);
      } else {
        alreadyDeleted();
        form.resetFields();
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      failure();    
      form.resetFields();
      setIsLoading(false);
    }
  }

  const success = () => {
    Modal.success({
      maskClosable: true,
      centered: true, 
      title: 'Success',
      content: 'Contact successfully unsubscribed.'
    })
  }

  const alreadyDeleted = () => {
    Modal.warning({
      maskClosable: true,
      centered: true, 
      title: 'Previously Deleted',
      content: 'The email has already been unsubscribed.'
    })
  }

  const failure = () => {
    Modal.error({
      maskClosable: true,
      centered: true,
      title: 'Email Not Found',
      content: `
      Contact does not exist.
      `
  })
}

  return (
    <Spin spinning={isLoading}>
      <StyledBackground />
      <StyledContainer>
        <StyledWrapper>
          <StyledHeader>
            <UserDeleteOutlined />
            Unsubscribe
            <UserDeleteOutlined />
          </StyledHeader>
          <Form
            name="unsubscribe"
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
                <StyledButton block htmlType='submit'>UNSUBSCRIBE</StyledButton>
            </Form.Item>
          </Form>
          <StyledNavbar>
            <StyledLink to='/'>Subscribe</StyledLink>
            <StyledLink to="/findSubscriber">Find Subscriber</StyledLink>
          </StyledNavbar>
        </StyledWrapper>
      </StyledContainer>
    </Spin>
  )
}

export default Unsubscribe

/* 
      {success === true
      ? <div>CONTACT SUCCESSFULLY UNSUBSCRIBED</div>
      : success === false
      ? <div>CONTACT DOES NOT EXIST</div>
      : ''
      }
*/