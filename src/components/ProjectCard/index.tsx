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
  const renderLink = (iconSrc: string, altText: string, url?: string) =>
    url && (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <S.IconImg src={iconSrc} alt={altText} />
      </a>
    );

  return (
    <S.CardContainer
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-position={position}
    >
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.IconContainer>
          {renderLink(GithubIcon, "GitHub Icon", githubHref)}
          {renderLink(WebsiteIcon, "Website Icon", websiteHref)}
        </S.IconContainer>
      </S.Header>

      <S.ContentContainer>
        <S.Term>{term}</S.Term>
        <S.StackContainer>
          {skills.map((skill) => (
            <S.Stack key={skill}>{skill}</S.Stack>
          ))}
        </S.StackContainer>
        <S.CardContent>{content}</S.CardContent>
      </S.ContentContainer>
    </S.CardContainer>
  );
};

export default ProjectCard;
