import SkillCard from "./../../components/SkillCard/index"; // SkillCard로 수정
import * as S from "./style";
import * as T from "../style";

export default function Skills() {
  const skills = ["React", "Tailwind css", "Java", "TypeScript"];

  return (
    <T.Container>
      <S.Title>Skills</S.Title>

      <S.CardContainer>
        {skills.map((skill, index) => (
          <SkillCard key={index} skills={skill} />
        ))}
      </S.CardContainer>
    </T.Container>
  );
}
