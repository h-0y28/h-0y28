import React from "react";
import * as S from "./style";

import GithubIcon from "../../assets/githubColor.png";
import WebsiteIcon from "../../assets/websiteColor.png";

interface CardProps {
  skills: string[];
  title: string;
  content: string;
  href: string;
  term: string;
  githubHref?: string;
  websiteHref?: string;
}

const ProjectCard: React.FC<CardProps> = ({
  skills,
  title,
  content,
  href,
  term,
  githubHref,
  websiteHref,
}) => {
  // console.log("GithubIcon:", GithubIcon);
  // console.log("WebsiteIcon:", WebsiteIcon);

  return (
    <S.CardContainer
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <S.Header>
        <S.Term>{term}</S.Term>
        {/* 깃 + 웹 링크 */}
        <S.IntroduceContainer>
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
        </S.IntroduceContainer>
      </S.Header>

      <S.ContentContainer>
        <S.CardTitle>{title}</S.CardTitle>
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
