import styled from "styled-components";

export const ProfileInfo = styled.div`
cursor: default;
  min-width: 400px;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
  background: lightpink;
`;

export const UserEmail = styled.p`
  margin-bottom: 10px;
  text-align: center;
`;

export const BookDetails = styled.div``;
export const ReadBook = styled.p`
  user-select: none;
  margin: 0 5px;
  display: inline-block;
  padding: 5px;
  border-radius: 5px;
  background: lightgreen;
  transition: all 0.3s ease;
  &:hover {
    background-color: orange;
    color: white;
  }
`;
export const UnreadBook = styled.p`
  user-select: none;
  margin: 0 5px;
  display: inline-block;
  padding: 5px;
  border-radius: 5px;
  background: lightgoldenrodyellow;
  transition: all 0.3s ease;
  &:hover {
    background-color: orange;
    color: white;
  }
`;

export const Paragraph = styled.p`
  user-select: none;
  cursor: default;
  margin: 10px 0;
  display: inline-block;
`;
