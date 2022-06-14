import styled from "styled-components";
import { Input } from "antd";

export const StyledInput = styled(Input)`
  background-color: transparent;
  border: none;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.skyBlue}`};
  color: ${({ theme }) => theme.colors.skyBlue};

  &:hover {
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.primaryBlue}`};
  }
  &:focus {
    box-shadow: none;
  }
  &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input, .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
    background: transparent;
    box-shadow: none;
    border-color: ${({ theme }) => theme.colors.redError };
  }
`;