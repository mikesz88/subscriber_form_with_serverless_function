import styled from "styled-components";
import  { Button } from 'antd';

export const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.primaryBlue};
  background-color: ${({ theme }) => theme.colors.skyBlue};
  border-radius: 50px;
  font-weight: bold;

&:hover {
  color: ${({ theme }) => theme.colors.primaryBlue};
  background-color: ${({ theme }) => theme.colors.lightBlue};
}

&:focus {
  color: ${({ theme }) => theme.colors.primaryBlue};
  background-color: ${({ theme }) => theme.colors.skyBlue};
  border: 1px solid transparent;
}
`;