import React from "react";
import * as S from "./style";

interface CardProps {
  title: string;
  content: string;
  href?: string;
  imageSrc: string;
}

const AboutCard: React.FC<CardProps> = ({ title, content, href, imageSrc }) => {
  return (
    <S.Container>
      <S.Image src={imageSrc} alt="Picture" />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <S.ContentContainer>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardContent>{content}</S.CardContent>
        </S.ContentContainer>
      </a>
    </S.Container>
  );
};

export default AboutCard;
