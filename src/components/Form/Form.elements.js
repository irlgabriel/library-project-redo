import styled from "styled-components"

export const Form = styled.form`
  margin-top: 10px;
  justify-content: space-between;
  @media screen and (max-width: 768px) {

    flex-direction: column;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  &:last-of-type {
    width: 100%;
  }
`

export const FormHeader = styled.h3`
  width: 100%;
  text-align: center;
`

export const FormLabel = styled.label`
  text-align: center;
  margin-bottom: 5px;
`

export const FormInput = styled.input`
  
`

export const Button = styled.button`
  padding: .375rem .750rem;
  width: 25%;
  margin: auto;


  &hover {

  }
`