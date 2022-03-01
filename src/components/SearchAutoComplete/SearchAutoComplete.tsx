import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules/store';

import * as S from './style';

interface Iprops {
  autoCompleteIndex: number;
  closeAutoComplete: () => void;
}

function SearchAutoComplete(props: Iprops) {
  const autoCompleteWords = useSelector((store: RootState) => store.autoComplete).data.slice(0, 7);
  return (
    <>
      <S.AutoCompleteList>
        <S.Subtitle>
          <p>추천 검색어</p>
        </S.Subtitle>
        {autoCompleteWords &&
          autoCompleteWords.map((item, index) => {
            return (
              <S.AutoCompleteWord key={index} isSelected={props.autoCompleteIndex === index}>
                <p>{item.name}</p>
              </S.AutoCompleteWord>
            );
          })}
        <S.CloseAutoComplete>
          <p
            onClick={() => {
              props.closeAutoComplete();
            }}
          >
            자동완성 닫기
          </p>
        </S.CloseAutoComplete>
      </S.AutoCompleteList>
    </>
  );
}

export default SearchAutoComplete;
