import * as S from "./style";

export default function Home() {
  return (
    <S.HomeContainer>
      <S.IntroduceContainer>
        <S.Title>프론트엔드 개발자 정효주</S.Title>
        <S.Line />
        <S.IntroduceText>
          <span>안녕하세요?</span>
          <span>끊임없이 발전하는 개발자</span>
          <span>정효주입니다!</span>
        </S.IntroduceText>
      </S.IntroduceContainer>
    </S.HomeContainer>
  );
}
