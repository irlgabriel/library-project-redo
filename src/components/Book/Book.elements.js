import styled from "styled-components";

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  opacity: ${({ bookStatus }) => (bookStatus ? "0.4" : "1")};
`;

export const BookTitle = styled.p`
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
`;
export const BookAuthor = styled.p`
  text-align: center;
  font-size: 1rem;
`;

export const BookPages = styled.p`
  text-align: center;
  margin-top: auto;
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button``;
