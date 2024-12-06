import SkillCard from "./../../components/SkillCard/index";
import * as S from "./style";
import * as T from "../style";

export default function Skills() {
  const skills = {
    frontendDevelopment: {
      languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
      frameworksAndLibraries: ["React", "Tailwind CSS", "Vite"],
      stateManagement: ["React Hooks", "Context API"],
    },
    tools: {
      versionControl: ["Git", "GitHub"],
      otherTools: ["Firebase"],
    },
    conceptsAndPractices: [
      "Responsive Web Design",
      "Clean Code & Best Practices",
    ],
  };

  return (
    <T.Container>
      <S.Title>Skills</S.Title>
      <S.CardContainer>
        {Object.entries(skills).map(([category, details], index) => (
          <SkillCard key={index} category={category} details={details} />
        ))}
      </S.CardContainer>
    </T.Container>
  );
}
