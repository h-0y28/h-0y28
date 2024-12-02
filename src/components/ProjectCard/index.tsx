import React, { useState } from "react";
import * as S from "./style";

import GithubIcon from "../../assets/githubColor.png";
import WebsiteIcon from "../../assets/websiteColor.png";

interface ProjectCardProps {
  position: "left" | "right";
  skills: string[];
  title: string;
  description: string;
  href: string;
  term: string;
  githubHref?: string;
  websiteHref?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  skills,
  title,
  description,
  href,
  term,
  githubHref,
  websiteHref,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <S.CardWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <S.CardContainer href={href} target="_blank" rel="noopener noreferrer">
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.IconContainer>
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
          </S.IconContainer>
        </S.Header>

        <S.ContentContainer>
          <S.Term>{term}</S.Term>
          <S.SkillContainer>
            {skills.map((skill, index) => (
              <S.Skill key={index}>{skill}</S.Skill>
            ))}
          </S.SkillContainer>
        </S.ContentContainer>
      </S.CardContainer>

      {isHovered && (
        <S.Description>
          <S.DescriptionTitle>Project Description</S.DescriptionTitle>
          <S.DescriptionContent>{description}</S.DescriptionContent>
        </S.Description>
      )}
    </S.CardWrapper>
  );
};

export default ProjectCard;
