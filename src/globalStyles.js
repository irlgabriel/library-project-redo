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
  background-image: url('https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
  background-repeat: no-repeat;
  background-attachment: fixed; 
  background-size: cover;
`;

export const Button = styled.button`
  user-select: none;
  padding: 0.675rem 1.35rem;
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
  &:hover:disabled {
    background: #101522;
    color: white;
    border: 1px solid white;
  }
  &:disabled {
    opacity: 0.4;
  }
`;
export default GlobalStyle;
