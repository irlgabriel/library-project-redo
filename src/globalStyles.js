import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0px 50px 0px 50px;
`;
export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  user-select: none;
  padding: 0.375rem 0.75rem;
  border: none;
  border-radius: 5px;
  background: #101522;
  color: white;
  border: 1px solid white;
  transition: all 0.5s ease;
  &:hover {
    background: white;
    color: #101522;
    border: 1px solid #101522;
  }
  
`;
export default GlobalStyle;
