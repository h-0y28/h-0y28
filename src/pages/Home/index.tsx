import * as S from "./style";

export default function Home() {
  return (
    <S.HomeContainer>
      <S.IntroduceContainer>
        <S.Title>FE 개발자 정효주의 포트폴리오입니다.</S.Title>
        <S.Line />
        <S.IntroduceText>
          안녕하세요.
          <br />
          끊임없이 발전하는 프론트엔드 개발자
          <br />
          정효주입니다.
        </S.IntroduceText>
      </S.IntroduceContainer>
    </S.HomeContainer>
  );
}
