import React from "react";
import * as S from "./style";

interface CardProps {
  skills: string;
}

const SkillCard: React.FC<CardProps> = ({ skills }) => {
  return (
    <S.CardContainer>
      <S.Name>{skills}</S.Name>
    </S.CardContainer>
  );
};

export default SkillCard;
