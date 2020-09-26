import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 10px;
  padding: 0 2rem;
  width: 800px;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: auto;
    flex-direction: column;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  &:last-of-type {
    width: 100%;
  }
`;

export const FormHeader = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
`;

export const FormLabel = styled.label`
  text-align: center;
  margin-bottom: 5px;
`;

export const FormInput = styled.input``;

export const Button = styled.button`
  padding: 0.375rem 0.75rem;
  width: 25%;
  margin: auto;

  &hover {
  }
`;

export const FormSelectGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormSelect = styled.select``