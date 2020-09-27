import styled from "styled-components";
import { FaTrash } from "react-icons/fa"

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  opacity: ${({ bookStatus }) => (bookStatus ? "0.4" : "1")};
  background: ${({ bookStatus }) => (!bookStatus ? "lightcoral" : "lightblue")};
  border-radius: 5px;
  height: 350px;
  width: 250px;
  margin: 10px;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ bookStatus }) => (bookStatus ? "lightcoral" : "lightblue")};
  }
`;

export const BookTitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
export const BookAuthor = styled.p`
  margin-top: 25px;
  text-align: right;
  font-size: 1rem;
`;

export const BookPages = styled.p`
  text-align: center;
  margin-top: auto;
  margin-bottom: 10px;
`;

export const DeleteButton = styled(FaTrash)`
  transform: rotate(0deg);
  transition: all 0.5s ease-in-out;
  font-size: 2.5rem;
  &:hover {
    transform: rotate(45deg);
    color: red;
  }
`;
