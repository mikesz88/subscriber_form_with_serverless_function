import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  font-size: large;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.skyBlue};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryBlue};
  }
`;