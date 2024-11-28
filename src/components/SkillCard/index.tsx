import React from "react";

interface CardProps {
  skills: string;
}

const SkillCard: React.FC<CardProps> = ({ skills }) => {
  return (
    <>
      <div>{skills}</div>
      <p>skill card</p>
    </>
  );
};

export default SkillCard;
