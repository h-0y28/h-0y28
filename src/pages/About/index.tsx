import AboutCard from "../../components/AboutCard";
import * as S from "./style";
import * as T from "../style";

export default function About() {
  return (
    <T.Container>
      <S.Title>About</S.Title>
      <S.CardContainer>
        <AboutCard title="생년월일" content="2008.08.02" />
        <AboutCard
          title="학교"
          content="광주소프트웨어마이스터고(2023.03.04~2027.01)"
        />
        <AboutCard title="전화번호" content="010-5496-1458" />

        <AboutCard
          title="GitHub"
          content="내 GitHub"
          href="https://github.com/h-0y28"
        />
        <AboutCard
          title="LinkedIn"
          content="내 LinkedIn"
          href="https://www.linkedin.com/in/%ED%9A%A8%EC%A3%BC-%EC%A0%95-80242931a/"
        />
        {/* <AboutCard
          title="블로그"
          content="내 블로그"
          href="https://velog.io/@jhj080802/posts"
        /> */}
        <AboutCard title="이메일" content="fedevluna@gmail.com" />
      </S.CardContainer>
    </T.Container>
  );
}
