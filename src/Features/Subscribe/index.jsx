import React, { useState } from "react";
import axios from "axios";
import { StyledButton } from '../../Components/StyledButton';
import { StyledHeader } from '../../Components/StyledHeader';
import { StyledFormItem } from "../../Components/StyledFormItem";
import { StyledWrapper } from "../../Components/StyledWrapper";
import { UserAddOutlined} from '@ant-design/icons'
import { Form, Modal, Spin } from "antd";
import { StyledContainer } from "../../Components/StyledContainer";
import { StyledInput } from "../../Components/StyledInput";
import StyledBackground from "../../Components/StyledBackground";
import { StyledNavbar } from "../../Components/StyledNavbar";
import { StyledLink } from "../../Components/StyledLink";
import subscribeData from "./helper";


const Subscribe = () => {
  const [form] = Form.useForm();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onFieldsChange = (_, field) => {
    if ((field.every(object =>object.errors.length === 0)) 
    && field.every(object => !!object.value)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  const onSubmit = async values => {
    setIsLoading(true);
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
      setIsLoading(false);
      success();
    } catch (error) {
      setIsLoading(false);
      failure();
      console.error(error);
    }
  };

  const success = () => {
    Modal.success({
      maskClosable: true,
      centered: true,
      title: 'Success!',
      content: 'You have successfully subscribed to my email list!'
    })
  }

  const failure = () => {
    Modal.error({
      maskClosable: true,
      centered: true,
      title: 'Error!',
      content: 'There was an error submitting your information. Refresh and try again!',
    })
  }

  return (
    <>
      <StyledBackground />
      <StyledContainer>
        <StyledWrapper>
          <Spin spinning={isLoading}>
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
              {subscribeData.map(formItem => (
                <StyledFormItem
                  key={formItem.name}
                  label={formItem.label}
                  name={formItem.name}
                  colon={false}
                  required={false}
                  rules={formItem.rules}
                >
                  <StyledInput type={formItem.inputType} required />
                </StyledFormItem>
              ))}
              <Form.Item noStyle>
                <StyledButton disabled={isDisabled} block htmlType="submit">Subscribe</StyledButton>
              </Form.Item>
              </Form>
            <StyledNavbar>
              <StyledLink to="/findSubscriber">Find Subscriber</StyledLink>
              <StyledLink to="/unsubscribe">Unsubscribe</StyledLink>
            </StyledNavbar>
          </Spin>
        </StyledWrapper>
      </StyledContainer>
    </>
  );
};

export default Subscribe;
