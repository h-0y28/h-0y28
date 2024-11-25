import AboutCard from "../../components/AboutCard";
import * as S from "./style";
import * as T from "../style";

import birthday from "../../assets/brithday.png";
import school from "../../assets/school.png";
import phone from "../../assets/phone.png";
import github from "../../assets/github.png";
import linkedIn from "../../assets/linkedin.png";
import email from "../../assets/email.png";

const aboutData = [
  {
    title: "생년월일",
    content: "2008.08.02",
    imageSrc: birthday,
  },
  {
    title: "학교",
    content: "광주소프트웨어마이스터고(2023.03.04~2027.01)",
    href: "https://www.instagram.com/gsmschool_official/",
    imageSrc: school,
  },
  {
    title: "전화번호",
    content: "010-5496-1458",
    imageSrc: phone,
  },
  {
    title: "GitHub",
    content: "내 GitHub",
    href: "https://github.com/h-0y28",
    imageSrc: github,
  },
  {
    title: "LinkedIn",
    content: "내 LinkedIn",
    href: "https://www.linkedin.com/in/%ED%9A%A8%EC%A3%BC-%EC%A0%95-80242931a/",
    imageSrc: linkedIn,
  },
  {
    title: "이메일",
    content: "fedevluna@gmail.com",
    href: "mailto:fedevluna@gmail.com",
    imageSrc: email,
  },
];

export default function About() {
  return (
    <T.Container>
      <S.Title>About</S.Title>
      <S.CardContainer>
        {aboutData.map((item, index) => (
          <AboutCard
            key={index}
            title={item.title}
            content={item.content}
            href={item.href}
            imageSrc={item.imageSrc}
          />
        ))}
      </S.CardContainer>
    </T.Container>
  );
}
