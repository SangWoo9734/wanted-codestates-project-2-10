import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

interface Idiv {
  inFocus: number;
}

export const SearchContainer = styled.div`
  width: 80%;
  margin: auto;
`;

export const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.div<Idiv>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 50px;
  margin: 0;
  padding: 0;
  border-radius: 20px 0 0 ${(props) => (props.inFocus ? 0 : 20)}px;
  background: white;
`;

export const SearchInputPlace = styled.input`
  border: none;
  padding: 5px 0;
  font-size: 16px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const SearchInputIcon = styled(FaSearch)`
  margin: 0 10px 0 20px;
`;

export const SearchButton = styled.button<Idiv>`
  min-width: 70px;
  max-width: 50px;
  width: 10%;
  height: 50px;
  border: none;
  border-radius: 0 20px ${(props) => (props.inFocus ? 0 : '20px')} 0;
  background: rgba(41 97 218);
  color: white;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    background: rgb(89, 139, 255);
  }
`;
