import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  max-width: 600px;
  margin: auto;
  margin-top: 10px;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  &:last-of-type {
    flex-direction: row;
    justify-content: center;
  }
`;

export const FormHeader = styled.h3`
  width: 100%;
  text-align: center;
  color: white;
`;

export const FormLabel = styled.label`
  text-align: center;
  margin-bottom: 5px;
  color: white;
`;

export const FormInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: none;
  outline: none;
  border: 2px solid lightgray;
  box-sizing: border-box;
  &:focus {
    border: 2px solid lightgray;
  }
  &:focus:invalid {
    border: 3px solid rgba(219, 22, 22, 0.4);
  }
  &:focus:valid {
    border: 3px solid rgba(50, 168, 82, 0.4);
  }

`;
export const Button = styled.button`
  padding: 0.175rem 0.5rem;
  margin: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: .75rem;
`
export const AlreadyUser = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: white;
`
export const UserLink = styled(Link)`
  text-decoration: none;
  color: lightcoral;
`