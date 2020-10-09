import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

export const BookContainer = styled.div`
  cursor: default;
  box-shadow: 0 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  opacity: ${({ bookStatus }) => (bookStatus === "read" ? "0.65" : "1")};
  background: ${({ bookStatus }) => (!bookStatus ? "lightcoral" : "lightblue")};
  border-radius: 5px;
  height: 350px;
  width: 250px;
  margin: 10px;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ bookStatus }) =>
      bookStatus ? "lightcoral" : "lightblue"};
  }

  @media screen and (max-width: 768px) {
    width: 350px;
    height: 450px;
  }

  @media screen and (max-width: 980px) {
    width: 300px;
    height: 400px;
  }
`;

export const BookTitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  user-select: none;
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
  font-size: 2rem;
  &:hover {
    transform: rotate(45deg);
    color: red;
  }
`;

export const StatusDiv = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 10px;
  border-top-left-radius: 5px;
  background: ${({ status }) => (status === "read" ? "lightgray" : "white")};
`;
