import React from "react";
import * as S from "./style";

interface CardProps {
  skills: string[];
  title: string;
  content: string;
  href: string;
}

const ProjectCard: React.FC<CardProps> = ({ skills, title, content, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <S.CardContainer>
        <S.StackContainer>
          {skills.map((skill, index) => (
            <S.Stack key={index}>{skill}</S.Stack>
          ))}
        </S.StackContainer>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardContent>{content}</S.CardContent>
      </S.CardContainer>
    </a>
  );
};

export default ProjectCard;
