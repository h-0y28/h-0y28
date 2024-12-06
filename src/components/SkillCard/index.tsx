import React from "react";
import * as S from "./style";

interface CardProps {
  category: string;
  details: Record<string, string[]> | string[];
}

const SkillCard: React.FC<CardProps> = ({ category, details }) => {
  const isArray = Array.isArray(details);

  return (
    <S.CardContainer>
      <S.Category>{category}</S.Category>
      <S.SkillList>
        {isArray
          ? (details as string[]).map((item, index) => (
              <S.SkillItem key={index}>{item}</S.SkillItem>
            ))
          : Object.entries(details as Record<string, string[]>).map(
              ([subCategory, items], index) => (
                <S.SubCategory key={index}>
                  <S.SubCategoryTitle>{subCategory}</S.SubCategoryTitle>
                  <S.SubCategoryList>
                    {items.map((item, i) => (
                      <S.SkillItem key={i}>{item}</S.SkillItem>
                    ))}
                  </S.SubCategoryList>
                </S.SubCategory>
              )
            )}
      </S.SkillList>
    </S.CardContainer>
  );
};

export default SkillCard;
