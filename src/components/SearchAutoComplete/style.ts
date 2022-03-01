import styled from 'styled-components';

interface Ili {
  isSelected: boolean;
}

export const AutoCompleteList = styled.ul`
  width: 100%;
  height: fit-content;
  list-style: none;
  margin: auto;
  padding: 0;
  background: white;
  border-radius: 0 0 20px 20px;
  border-top: 1px solid lightgray;
`;

export const Subtitle = styled.li`
  display: flex;
  align-items: center;
  padding: 7px;
  height: 20px;
  p {
    width: 100%;
    text-align: left;
    margin: 3px 0;
    padding-left: 50px;
    font-size: 14px;
    color: gray;
  }
`;

export const AutoCompleteWord = styled.li<Ili>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: ${(props) => (props.isSelected ? '#e8e8e8' : 'white')};

  p {
    width: 100%;
    text-align: left;
    margin: 3px 0;
    padding-left: 50px;
  }
`;

export const CloseAutoComplete = styled.li`
  width: 100%;
  height: 30px;

  &:hover {
    cursor: pointer;
  }

  p {
    display: flex;
    align-items: center;
    margin: 0;
    text-align: left;
    padding: 5px 0 5px 20px;
    border-top: 1px solid lightgray;
    font-size: 14px;
    color: gray;
    text-decoration: underline;
  }
`;
