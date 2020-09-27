import styled from "styled-components";

export const Form = styled.form`
  width: 600px;
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
`;

export const FormLabel = styled.label`
  text-align: center;
  margin-bottom: 5px;
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
