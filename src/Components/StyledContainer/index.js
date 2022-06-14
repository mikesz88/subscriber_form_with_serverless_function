import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue };
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;