import styled from "styled-components";
import  { Form } from 'antd';

export const StyledFormItem = styled(Form.Item)`
  & .ant-form-item-label > label {
    color: ${({ theme }) => theme.colors.skyBlue };
    font-size: large;
  }
`;