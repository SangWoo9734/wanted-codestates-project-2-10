import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as S from './style';
import SearchAutoComplete from '../SearchAutoComplete';
import { callApi } from '../../modules/autoComplete';
import { RootState } from '../../modules/store';

function Search() {
  interface ResultDataType {
    name: string;
    id: number;
  }
  const [autoCompleteIndex, setaustoCompleteIndex] = useState(-1);
  const [autoCompleteState, setAutoCompleteState] = useState(0);
  const [userInput, setUserInput] = useState('');
  const autoCompleteWords: ResultDataType[] = useSelector((store: RootState) => store.autoComplete).data.slice(0, 7);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInput) {
      dispatch(callApi(userInput));
    }
  }, [userInput]);

  const closeAutoComplete = () => {
    setAutoCompleteState(0);
    setaustoCompleteIndex(-1);
  };
  const controlAutoComplete = (keyCode: string) => {
    if (keyCode === 'ArrowDown') {
      setaustoCompleteIndex((autoCompleteIndex + 1) % autoCompleteWords.length);
    } else if (keyCode === 'ArrowUp') {
      let index;
      if (autoCompleteIndex < 0) {
        index = autoCompleteWords.length - 1;
      } else {
        index = autoCompleteIndex - 1;
      }
      setaustoCompleteIndex(index);
    } else if (keyCode === 'Enter') {
      setUserInput(autoCompleteWords[autoCompleteIndex].name);
      closeAutoComplete();
    } else if (keyCode === 'Escape') {
      closeAutoComplete();
    }
  };

  return (
    <S.SearchContainer>
      {/* 현재 자동완성 단어목록에서 엔터키 클릭시 디자인 변경 안됨 */}
      {/* 현재 포커싱되었을때 자동완성 리스트 등장(X) ->입력상태일때 */}
      <S.SearchWrap>
        <S.SearchInput inFocus={autoCompleteState}>
          <S.SearchInputIcon />
          <S.SearchInputPlace
            type="text"
            placeholder="질환명을 입력해 주세요."
            value={userInput}
            onBlur={() => {
              closeAutoComplete();
            }}
            onKeyUp={(event) => {
              if (autoCompleteState) controlAutoComplete(event.key);
            }}
            onChange={(event) => {
              setAutoCompleteState(1);
              setUserInput(event.target.value);

              if (userInput) {
                setAutoCompleteState(0);
              }
            }}
          />
        </S.SearchInput>
        <S.SearchButton inFocus={autoCompleteState}>검색</S.SearchButton>
      </S.SearchWrap>
      {autoCompleteState ? (
        <SearchAutoComplete autoCompleteIndex={autoCompleteIndex} closeAutoComplete={closeAutoComplete} />
      ) : (
        <span></span>
      )}
    </S.SearchContainer>
  );
}

export default Search;
