import styled from "styled-components";

export const StyledWrapper = styled.div`
    border: ${({ theme }) => `2px solid ${theme.colors.skyBlue}`};
    min-width: 300px;
    width: 500px;
    margin: 15px;
    padding: 15px;
    border-radius: 25px;
`;