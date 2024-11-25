import AboutCard from "../../components/AboutCard";
import * as S from "./style";
import * as T from "../style";

import birthday from "../../assets/brithday.png";
import school from "../../assets/school.png";
import phone from "../../assets/phone.png";
import github from "../../assets/github.png";
import linkedIn from "../../assets/linkedin.png";
import email from "../../assets/email.png";

export default function About() {
  return (
    <T.Container>
      <S.Title>About</S.Title>
      <S.CardContainer>
        <AboutCard title="생년월일" content="2008.08.02" imageSrc={birthday} />
        {/* <a href="https://www.flaticon.com/kr/free-icons/" title="달력 아이콘">
          달력 아이콘 제작자: Tanah Basah - Flaticon
        </a> */}
        <AboutCard
          title="학교"
          content="광주소프트웨어마이스터고(2023.03.04~2027.01)"
          href="https://www.instagram.com/gsmschool_official/"
          imageSrc={school}
        />
        {/* <a href="https://www.flaticon.com/kr/free-icons/" title="학교 아이콘">
          학교 아이콘 제작자: Freepik - Flaticon
        </a> */}

        <AboutCard title="전화번호" content="010-5496-1458" imageSrc={phone} />
        {/* <a
          href="https://www.flaticon.com/kr/free-icons/-"
          title="전화 번호 아이콘"
        >
          전화 번호 아이콘 제작자: Freepik - Flaticon
        </a> */}
        <AboutCard
          title="GitHub"
          content="내 GitHub"
          href="https://github.com/h-0y28"
          imageSrc={github}
        />
        {/* <a
          href="https://www.flaticon.com/kr/free-icons/github"
          title="github 아이콘"
        >
          Github 아이콘 제작자: Freepik - Flaticon
        </a> */}
        <AboutCard
          title="LinkedIn"
          content="내 LinkedIn"
          href="https://www.linkedin.com/in/%ED%9A%A8%EC%A3%BC-%EC%A0%95-80242931a/"
          imageSrc={linkedIn}
        />
        {/* <AboutCard
          title="블로그"
          content="내 블로그"
          href="https://velog.io/@jhj080802/posts"
        /> */}
        <AboutCard
          title="이메일"
          content="fedevluna@gmail.com"
          imageSrc={email}
        />
        {/* <a href="https://www.flaticon.com/kr/free-icons/" title="이메일 아이콘">
          이메일 아이콘 제작자: Freepik - Flaticon
        </a> */}
      </S.CardContainer>
    </T.Container>
  );
}
