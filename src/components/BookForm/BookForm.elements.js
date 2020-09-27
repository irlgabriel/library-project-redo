import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

export const Form = styled.form`
  display: ${({ formToggled }) => (formToggled ? "flex" : "none")};
  flex-wrap: wrap;
  margin: auto;
  margin-top: 10px;
  width: 700px;
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
    flex-direction: row;
    justify-content: center;
  }
`;

export const FormHeader = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-transform: uppercase;
  text-align: center;
  display: inline-block;
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
    border: 2px solid rgba(219, 22, 22, 0.4);
  }
  &:focus:valid {
    border: 2px solid rgba(50, 168, 82, 0.4);
  }
`;

export const Button = styled.button`
  padding: 0.375rem 0.75rem;
  width: 200px;
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

export const FormSelect = styled.select``;

export const FormToggler = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(50, 168, 82, 0.4);
  padding: 0.375rem 0.75rem;
  border-radius: 5px;
  user-select: none;
  text-align: center;
  margin: auto;
  min-width: 150px;
  max-width: 200px;
`;

export const FlexBreak = styled.div`
  flex-basis: 100%;
`;

export const ToggleIcon = styled(FaAngleDown)`
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  transform: ${({ formToggled }) =>
    !formToggled ? "rotate(0deg)" : "rotate(180deg)"};
`;
