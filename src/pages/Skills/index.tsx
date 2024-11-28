import SkillCard from "./../../components/SkillCard/index";
import * as S from "./style";
import * as T from "../style";

export default function Skills() {
  const skills = ["React", "Tailwind CSS", "Java", "TypeScript"];

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
