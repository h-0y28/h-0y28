import ProjectCard from "./../../components/ProjectCard/index";
import * as S from "./style";
import * as T from "../style";

export default function Projects() {
  const projects = [
    {
      skills: ["React", "TypeScript", "Tailwind CSS"],
      title: "Project 1",
      description: "This is the first project description.",
      href: "https://example1.com",
      term: "2024.03 ~ 2024.04",
      githubHref: "https://github.com/h-0y28",
      websiteHref: "https://github.com/h-0y28",
    },
    {
      skills: ["Next.js", "Chakra UI", "GraphQL"],
      title: "Project 2",
      description: "This is the second project description.",
      href: "https://example2.com",
      term: "2024.03 ~ 2024.04",
      githubHref: "https://github.com/h-0y28",
      websiteHref: "https://github.com/h-0y28",
    },
    {
      skills: ["Vue", "Vuetify", "Firebase"],
      title: "Project 3",
      description: "This is the third project description.",
      href: "https://example3.com",
      term: "2024.03 ~ 2024.04",
      githubHref: "https://github.com/h-0y28",
      websiteHref: "https://github.com/h-0y28",
    },
  ];

  return (
    <T.Container>
      <S.TitleContainer>
        <S.Title>
          Projects
          <S.AddTitle>Projects</S.AddTitle>
        </S.Title>
      </S.TitleContainer>

      <S.CardContainer>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            position={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </S.CardContainer>
    </T.Container>
  );
}
