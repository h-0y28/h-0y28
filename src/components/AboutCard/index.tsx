import React from "react";
import * as S from "./style";

interface CardProps {
  title: string;
  content: string;
  href?: string;
}

const AboutCard: React.FC<CardProps> = ({ title, content, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <S.CardContainer>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardContent>{content}</S.CardContent>
      </S.CardContainer>
    </a>
  );
};

export default AboutCard;
