import React from 'react';

import * as S from './style';
import Search from '../../components/Search';

function Home() {
  return (
    <S.Background>
      <S.Title>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </S.Title>
      <Search />
    </S.Background>
  );
}

export default Home;
