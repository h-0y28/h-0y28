import React from "react";
import * as S from "./style";

import GithubIcon from "../../assets/githubColor.png";
import WebsiteIcon from "../../assets/websiteColor.png";

interface CardProps {
  position: "left" | "right";
  skills: string[];
  title: string;
  content: string;
  href: string;
  term: string;
  githubHref?: string;
  websiteHref?: string;
}

const ProjectCard: React.FC<CardProps> = ({
  position,
  skills,
  title,
  content,
  href,
  term,
  githubHref,
  websiteHref,
}) => {
  return (
    <S.CardContainer
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-position={position}
    >
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.InconContainer>
          {githubHref && (
            <a href={githubHref} target="_blank" rel="noopener noreferrer">
              <S.GithubImg src={GithubIcon} alt="GitHub Icon" />
            </a>
          )}
          {websiteHref && (
            <a href={websiteHref} target="_blank" rel="noopener noreferrer">
              <S.WebsiteImg src={WebsiteIcon} alt="Website Icon" />
            </a>
          )}
        </S.InconContainer>
      </S.Header>

      <S.ContentContainer>
        <S.Term>{term}</S.Term>
        <S.StackContainer>
          {skills.map((skill, index) => (
            <S.Stack key={index}>{skill}</S.Stack>
          ))}
        </S.StackContainer>
        <S.CardContent>{content}</S.CardContent>
      </S.ContentContainer>
    </S.CardContainer>
  );
};

export default ProjectCard;
