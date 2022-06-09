import styled from "styled-components";

export const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.colors.skyBlue };
  min-width: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;