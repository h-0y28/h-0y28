import React from "react";

interface CardProps {
  skills: string;
}

const SkillCard: React.FC<CardProps> = ({ skills }) => {
  return (
    <>
      <div>{skills}</div> {/* skills 값 출력 */}
      <p>skill card</p>
    </>
  );
};

export default SkillCard;
