import styled from "styled-components";
import { Link } from "react-router-dom"
import { FaBorderNone } from "react-icons/fa";

export const LibraryHeader = styled.h1`
  text-align: center;
`;

export const BooksContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const NoLogin = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 500px;
  background: lightsalmon;
  padding: 15px;
  border-radius: 5px;
`

export const UserLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  margin: 3px 0;
  font-size: 1.4rem;
  color: white;
  padding: 5px;
  background: darkgrey;
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    background: white;
    color: darkgrey;
  }
`

export const Header = styled.h4`
  text-align: center;
  margin-bottom: 10px;
`